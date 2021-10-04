const { user, motorcycle } = require("../models");

class Usermotor {
  static post = async (req, res, next) => {
    try {
      let { updateId } = req.params;
      let { motorcycleId } = req.body;

      if (+updateId !== req.currentUser.id) {
        next({ code: 403, message: "Forbidden" });
      }

      const user_ = await user.findByPk(updateId);
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
      let { updateId } = req.params;

      if (+updateId !== req.currentUser.id) {
        return next({ code: 403, message: "Forbidden" });
      }

      const removeUser = await user.findByPk(updateId);
      const removeMotor = await motorcycle.findByPk(motorId);

      if (!removeUser || !removeMotor) return next({code : 404, message: 'Either User / Motor is not found'})

      await removeUser.removeMotorcycle(removeMotor);
      res.sendStatus(204)
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
