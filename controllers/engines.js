class Engines {
  static getAll = async (req, res, next) => {
    try {
      res.send("control");
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Engines;
