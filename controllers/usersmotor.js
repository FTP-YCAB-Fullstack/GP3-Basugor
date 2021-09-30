const { user, motorcycle } = require("../models");
const motorcycles = require("./motorcycles");

class Usermotor {
  static post = async (req, res, next) => {
    try {
      let { userId } = req.params;
      let { motorcycleId } = req.body;
      console.log(userId);
      const user_ = await user.findByPk(userId);
      const motor = await motorcycle.findByPk(motorcycleId);
      await user_.addMotorcycle(motor);
      console.log(motorcycle);

      res.status(201).json({
        message: "sukses",
      });
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static deleteMotor = async (req, res, next) => {
    try {
      let { motorId } = req.params;
      let { userId } = req.params;

      const removeUser = await user.findByPk(userId);
      const removeMotor = await motorcycle.findByPk(motorId);

      await removeUser.removeMotorcycle(removeMotor);
      console.log(motorId);
      res.status(202).json({
        message: "the motorcycle has been success removed"
      });
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static patch = async (req, res, next) => {
    res.send("user motor");
  };
}

module.exports = Usermotor;
