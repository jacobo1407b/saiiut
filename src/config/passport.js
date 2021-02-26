const passport = require("passport");
const Admin = require("../models/User");
const Ad = require('../models/Admin');
const Prof = require('../models/Profesor');
const Alu = require('../models/Alumno');
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "matricula",
      session: false,
    },
    async (matricula, password, done) => {
      const user = await Admin.findOne({ matricula: matricula }).populate(
        [
          {path:"admin", model:Ad},
          {path:"prof", model:Prof},
          {path:"alum", model:Alu}
        ]
      )
      if (!user) {
        return done(null, false, { msg: "Usuario no encontrado", error: true }); //no existe
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user); //si existe el usuario
        } else {
          return done(null, false, {
            mesg: "Contraseña incorrecta",
            error: true,
          }); //el password no coincide
        }
      }
    }
  )
);
const {SECRET,ALGORITMO } = process.env
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET;
opts.algorithms = ALGORITMO;

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.findOne({ _id: jwt_payload.sub })
      .then((data) => {
        if (data == null) {
          return done(null, false);
        } else {
          return done(null, data);
        }
      })
      .catch((err) => done(err, null));
  })
);
