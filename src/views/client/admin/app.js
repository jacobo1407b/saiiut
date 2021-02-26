import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/actions";
import Layout from "./layout";
import { Ro, Routes, route } from "./Routes";
import { parse, init, adminRole, alumnoRole } from "../jackerLibrary";

const app = () => {
  const dispatch = useDispatch();
  const initRole = init();
  useEffect(() => {
    dispatch(
      setUser({
        token: parse.token ? parse.token : null,
        role: initRole ? initRole : null,
      })
    );
    localStorage.setItem("noAuth", "/index/admin/");
    localStorage.setItem("auth", "/index/admin/dashboard");
    localStorage.setItem("profile", "/index/admin/profile");
  }, []);

  return (
    <BrowserRouter>
      {!parse.token ? (
        <Ro />
      ) : initRole === adminRole ? (
        <Layout rout={<Routes />} route={route} />
      ) : initRole === alumnoRole ? (
        window.location.replace("/index/alumnos/")
      ) : (
        window.location.replace("/index/profesor/")
      )}
    </BrowserRouter>
  );
};

export default app;
//
