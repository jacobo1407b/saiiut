const passport = require("passport");
const jwt = require("jsonwebtoken");
const error_types = require("../helpers/errors");
const {SECRET,ALGORITMO } = process.env

function authAdmin(req, res, next) {
  passport.authenticate(
    "local",
    { session: false },
    function (error, user, inf) {
      if (error || !user) {
        next(new error_types.Error404(inf.error));
      } else {
        const tipe = user.admin || user.prof || user.alum
        const payload = {
          sub: user._id,
          exp: Math.floor(Date.now() / 1000) + 86400,
          username: user.email,
          matricula:user.matricula,
          role:tipe.role
        };
        const token = jwt.sign(JSON.stringify(payload), SECRET, {
            algorithm: ALGORITMO,
          });
          const data = {
            user:user._id,
            matricula:user.matricula,
            token:token,
            role:tipe.role
          }
          res.cookie('token',token),
          res.cookie('role',data.role),
          res.cookie('user',data.user)
            res.json(data)
          
      }
    }
  )(req, res, next);
}

module.exports ={
  authAdmin
}
