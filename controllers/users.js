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
      
    } catch (error) {
      
    }
  }
  static getId = async (req,res,next) =>{
      try {
    
      } catch (error) {
    
      }
  } 

  static patch = async (req, res, next) => {
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = Users;
