import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
//components
import Login from "../components/Login/Login";
import Home from './Pages/Home';
import Alumn from './Pages/Alumn';
import Profe from './Pages/Profe';
import Profile from './Pages/Profile'

export const route = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: Home,
    layout: "/index/admin",
  },
  {
    path: "/alumnos",
    name: "Alumnos",
    rtlName: "Alumnos",
    icon: Person,
    component: Alumn,
    layout: "/index/admin",
  },
  {
    path: "/profesores",
    name: "Profesores",
    rtlName: "Profesores",
    icon: BubbleChart,
    component: Profe,
    layout: "/index/admin",
  },
];

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/index/admin/dashboard" exact>
          <Home/>
        </Route>
        <Route path="/index/admin/alumnos" exact>
          <Alumn/>
        </Route>
        <Route path="/index/admin/profesores" exact>
          <Profe/>
        </Route>
        <Route path="/index/admin/profile" exact>
          <Profile/>
        </Route>
        {/*route.map((pro, key) => {
          <Route
            path={pro.layout + pro.path}
            exact
            key={key}
            component={pro.component}
          />
        })*/}
        <Route path="/index/admin/*">
          <Redirect to="/index/admin/dashboard" />
        </Route>
      </Switch>
    </>
  );
};

export const Ro = () => {
  return (
    <Switch>
      <Route path="/index/admin/" exact>
        <Login />
      </Route>
      <Route path="/index/admin/*">
        <Redirect to="/index/admin/" />
      </Route>
    </Switch>
  );
};
