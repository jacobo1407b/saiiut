const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const passport = require("passport");
const ensure = require("./helpers/auth");
const path = require("path");
var cookieParser = require('cookie-parser');

const app = express();
const apiv = "/api/v1";

require("./mongo");
require('./config/passport');

app.set(
  "port",
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 3000
);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.set("json spaces", 2);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());



app.use(require('./routes/index.router'));
app.use(`${apiv}/auth`, require('./routes/auth.router'));
app.use(`${apiv}/admin`, require("./routes/admin.router"));
app.use(`${apiv}/prof`, require("./routes/profesor.router"));
app.use(`${apiv}/alumno`, require("./routes/alumno.router"));
app.use(`${apiv}/carreras`, require("./routes/carrera.router"));
app.use(`${apiv}/grupos`, require("./routes/grupo.router"));
app.use(`${apiv}/cuatri`, require("./routes/cuatrimestre.router"));

//statics files

app.use(express.static(path.join(__dirname, "public")));

//err

app.use(ensure.errorHandler);
app.use(ensure.notFoundHandler);


app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
