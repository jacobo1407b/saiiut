import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import Profile from './pages/Profile';

export const route = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: <h1>Home</h1>,
    layout: "/index/profesor",
  },
  {
    path: "/calificaciones",
    name: "Calificaciones",
    rtlName: "Calificaciones",
    icon: Person,
    component: <h1>Calf</h1>,
    layout: "/index/profesor",
  },
];
export const Routes = () => {
  return (
    <Switch>
      <Route path="/index/profesor/dashboard" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/index/profesor/calificaciones" exact>
        <h1>calificaciones</h1>
      </Route>
      <Route path="/index/profesor/profile" exact>
        <Profile/>
      </Route>
      <Route path="/index/profesor/*">
        <Redirect to="/index/profesor/dashboard" />
      </Route>
    </Switch>
  );
};

export const Ro =()=>{
    return(
        <Switch>
      <Route path="/index/profesor/" exact>
        <h1>Login</h1>
      </Route>
      <Route path="/index/profesor/*">
        <Redirect to="/index/profesor/" />
      </Route>
    </Switch>
    )
}
