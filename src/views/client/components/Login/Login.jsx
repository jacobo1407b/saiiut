import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../CustomButtons/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useToasts } from "react-toast-notifications";
import MenuImg from "../../assets/img/sidebar-1.jpg";
import {Auth} from '../../jackerLibrary';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(/build/${MenuImg})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const { addToast } = useToasts();

  const [data, setData] = useState({});

  const handlerChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlerSubmit =  (e) => {
    if (!data.matricula) {
      addToast("Agrege una matricula", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (!data.password) {
      addToast("Ingrese su contraseña", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      Auth("POST",data).then(response=>{
        console.log(response)
        if(response.error == "true"){
          addToast("Credenciales incorrectas", {
            appearance: "error",
            autoDismiss: true,
          });
          return false;
        }else{
          console.log('recarga')
          window.location.reload();
        }
      }).catch(err=>console.log(err))
    }
    e.preventDefault();
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onChange={handlerChange}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Matricula"
              name="matricula"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CustomButton
              color="warning"
              fullWidth
              className={classes.submit}
              onClick={handlerSubmit}
            >
              Sign In
            </CustomButton>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
