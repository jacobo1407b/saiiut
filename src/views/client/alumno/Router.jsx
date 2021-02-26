import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Profile from './pages/Profile';
import Login from '../components/Login/Login'
export const route = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: <h1>Home</h1>,
    layout: "/index/alumnos",
  },
  {
    path: "/calificaciones",
    name: "Calificaciones",
    rtlName: "Calificaciones",
    icon: Person,
    component: <h1>Calf</h1>,
    layout: "/index/alumnos",
  },
];
export const Routes = () => {
  return (
    <Switch>
      <Route path="/index/alumnos/dashboard" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/index/alumnos/calificaciones" exact>
        <h1>calificaciones</h1>
      </Route>
      <Route path="/index/alumnos/profile" exact>
        <Profile/>
      </Route>
      <Route path="/index/alumnos/*">
        <Redirect to="/index/alumnos/dashboard" />
      </Route>
    </Switch>
  );
};

export const Ro =()=>{
    return(
        <Switch>
      <Route path="/index/alumnos/" exact>
        <Login/>
      </Route>
      <Route path="/index/alumnos/*">
        <Redirect to="/index/alumnos/" />
      </Route>
    </Switch>
    )
}
