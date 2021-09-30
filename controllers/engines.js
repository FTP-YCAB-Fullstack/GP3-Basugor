const { engine } = require('./../models')

class Engines {
  static getAll = async (req, res, next) => {
    try {
      let data = await engine.findAll()
      res.status(200).json({
        data
      })
    } catch (error) {
      next({
        code: 500, message: error.message
      });
    }
  };
  static getDetail = async (req, res, next) => {
    try {
      let data = await engine.findByPk(req.params.id)

      if(!data){
        next({code: 500, message: 'Engines Not Found, try search id'})
      } else {
        res.status(200).json({
          data
        })
      };

    } catch (error) {
      next({code: 500, message: err.message})
    };
  }
  static postengine = async (req, res, next) => {
    try {
      let { transmission, stroke, gearbox } = req.body

      
    } catch (error) {
      
    }
  }
}

module.exports = Engines;
