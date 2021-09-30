const { user, motorcycle } = require("../models");

class Usermotor {
  static post = async (req, res, next) => {
    try {
      let { userId } = req.params;
      let { motorcycleId } = req.body;

      if (+userId !== req.currentUser.id) {
        next({ code: 403, message: "Forbidden" });
      }

      const user_ = await user.findByPk(userId);
      const motor = await motorcycle.findByPk(motorcycleId);

      if (!user_ || !motor) return next({code : 404, message: 'Either User / Motor is not found'})

      await user_.addMotorcycle(motor);

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

      if (+userId !== req.currentUser.id) {
        next({ code: 403, message: "Forbidden" });
      }

      const removeUser = await user.findByPk(userId);
      const removeMotor = await motorcycle.findByPk(motorId);

      if (!removeUser || !removeMotor) return next({code : 404, message: 'Either User / Motor is not found'})

      await removeUser.removeMotorcycle(removeMotor);
      res.status(202).json({
        message: "the motorcycle has been success removed",
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
