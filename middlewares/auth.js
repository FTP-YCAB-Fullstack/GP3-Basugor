class auth {
  static Authentication = async (req, res, next) => {};
  static Authorization = (roles) => async (req, res, next) => {
    try {
      if (roles.includes(req.currentUser.role)) {
        next({
          code: 401,
          message: "Authorizantion failed",
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
