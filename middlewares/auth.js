const jwt = require('jsonwebtoken');

class auth {
  static Authentication = async (req, res, next) => {
    const {token} = req.headers;
    jwt.verify(token, 'motorans', (err, result) => {
      if (err) {
        next({code: 401, message: err.message || 'invalid credential'})
      } else {
        req.user = result
        next()
      }
    })
  };
  static Authorization = (roles) => async (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        next({code: 403, message: 'Forbidden'})
      } else {
        next()
      }
  };
}

module.exports = auth;