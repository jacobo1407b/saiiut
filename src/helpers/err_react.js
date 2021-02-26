const ReactEngine = require('react-engine');

const reactErr=(err, req, res, next) => {
    console.error(err);
  
    // http://expressjs.com/en/guide/error-handling.html
    if (res.headersSent) {
      return next(err);
    }
  
    if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
      return res.redirect(302, err.redirectLocation);
    }
    else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
      return res.status(404).render(req.url);
    }
    else {
      // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
      // any other error we just send the error message back
      return res.status(500).render('500.jsx', {
        err: {
          message: err.message,
          stack: err.stack
        }
      });
    }
  }
  module.exports = {
    reactErr
  }