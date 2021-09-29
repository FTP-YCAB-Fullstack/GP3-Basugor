const jwt = require('jsonwebtoken');

class auth {
  static Authentication = async (req, res, next) => {
    const {token} = req.headers;
    jwt.verify(token, 'motorans', (err, result) => {
      if (err) {
        next({code: 401, message: err.message || 'invalid credential'})
      } else {
        req.currentUser = result
        next()
      }
    })
  };
  static Authorization = (roles) => async (req, res, next) => {
    try {
      console.log(req.currentUser)
      if (!roles.includes(req.currentUser.role)) {
        next({
          code: 403,
          message: "Forbidden",
        });
      } else {
        next();
      }
    } catch (error) {
      next({ code: 500, message: "Internal Server Error" });
    }
  };
}

module.exports = auth;