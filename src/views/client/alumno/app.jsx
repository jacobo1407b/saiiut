import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/actions";
import Layout from "../admin/layout";
import { Ro, Routes, route } from "./Router";
import { parse, init, adminRole, alumnoRole } from "../jackerLibrary";

const app = () => {
  const initRole = init();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        token: parse.token ? parse.token : null,
        role: initRole ? initRole : null,
      })
    );

    localStorage.setItem("noAuth", "/index/alumnos/");
    localStorage.setItem("auth", "/index/alumnos/dashboard");
    localStorage.setItem("profile", "/index/alumnos/profile");
  }, []);
  return (
    <BrowserRouter>
      {!parse.token ? (
        <Ro />
      ) : initRole === alumnoRole ? (
        <Layout rout={<Routes />} route={route} />
      ) : initRole === adminRole ? (
        window.location.replace("/index/admin/")
      ) : (
        window.location.replace("/index/profesor/")
      )}
    </BrowserRouter>
  );
};

export default app;
