import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/actions";
import Layout from "../admin/layout";
import { Ro, Routes, route } from "./Router";
import { parse, init, adminRole, profeRole } from "../jackerLibrary";

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
    localStorage.setItem("noAuth", "/index/profesor/");
    localStorage.setItem("auth", "/index/profesor/dashboard");
    localStorage.setItem("profile", "/index/profesor/profile");
  }, []);
  return (
    <BrowserRouter>
      {!parse.token ? (
        <Ro />
      ) : initRole === profeRole ? (
        <Layout rout={<Routes />} route={route} />
      ) : initRole === adminRole ? (
        window.location.replace("/index/admin/")
      ) : (
        window.location.replace("/index/alumnos/")
      )}
    </BrowserRouter>
  );
};

export default app;
