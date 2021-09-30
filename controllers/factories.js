
class Factories {
    static getAll = async (req, res, next) => {
      try {
        res.send("Factories");
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = Factories;
  