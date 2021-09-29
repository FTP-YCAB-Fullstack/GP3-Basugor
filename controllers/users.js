const { user } = require("./../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Users {
  static signup = async (req, res, next) => {
    try {
      let { name, email, password } = req.body;

      console.log(bcrypt.hashSync(password, 10));

      if (!email.includes("@")) {
        return next({ code: 400, message: "Invalid email" });
      }

      let exist = await user.findOne({ where: { email } });

      if (exist) {
        next({ code: 409, message: "This email is already registered" });
      } else {
        password = bcrypt.hashSync(password, 10);
        let newAccount = await user.create({
          name,
          email,
          password,
          role: "user",
        });
        res.status(201).json(newAccount);
      }
    } catch (err) {
      console.log(err);
    }
  };
  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user_ = await user.findOne({
        where: {
          email: email,
        },
      });

      if (!user_) {
        next({ code: 401, message: "Login Failed" });
      } else {
        const userJson = user_.toJSON();
        const validate = bcrypt.compareSync(password, userJson.password);

        if (!validate) {
          next({ code: 401, message: "Login Failed" });
        } else {
          const token = jwt.sign(
            { id: userJson.id, role: userJson.role },
            "motorans"
          );
          res.status(200).json({
            token,
          });
        }
      }
    } catch (error) {
      next({ code: 500, message: "Internal Server Error" });
    }
  };
  static getAll = async (req, res, next) => {
    try {
      console.log(req.user)
      const data = await user.findAll()
      res.status(200).json(data)
    } catch (error) {
      next({code: 500, message: error.message})
    }
  };
  static getId = async (req,res,next) =>{
      try {
        let {id} = req.params;
        
        const data = await user.findByPk(id)

        if (!data) {
          next({code: 404, message: 'Not Found'})
        } else {
          res.status(200).json(data)

        }
      } catch (error) {
        next({code: 500, message: error.message})
      }
  };
  static patch = async (req, res, next) => {
    try {
      let {id} = req.params;
      let {name, email, password} = req.body;
      const data = await user.findByPk(id);

      if (!data) {
        return next({code: 400, message: 'User not found'})
      }

      data.name = name || data.name;
      data.email = email || data.email;
      data.password = password || data.password

      data.save()

      res.status(200).json({
        status: 'updated'
      })
    } catch (error) {
      next({code: 500, message: 'Internal Server Error'})
    }
  }
}

module.exports = Users;
