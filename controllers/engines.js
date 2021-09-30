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
  static postEngine = async (req, res, next) => {
    try {
      let { transmission, stroke, gearbox } = req.body

      if(!transmission || !stroke || !gearbox ){
        next({code: 400, message: 'input invalid'})
      } else {
        let data = await engine.create({transmission, stroke, gearbox})
        res.status(201).json({data})
      }
      
    } catch (error) {
      next({code: 500, message: error.message})
    }
  };
  static patchEngine = async (req, res, next) => {
    try {
      let { transmission, stroke, gearbox } = req.body
      let {id} = req.params
      const data = await engine.update({transmission, stroke, gearbox}, {
        where: {id}
      });

      res.status(201).json({ message: 'update data success'})
    } catch (error) {
      next({code: 500, error,message})
    }
  };
  static deleteEngine = async (req, res, next) => {
    try {
      let {id} = req.params
      const data = await engine.findByPk(id)
      data.destroy()

      res.sendStatus(204)
    } catch (error) {
      next({code: 500, message: error.message})
    }
  }
}

module.exports = Engines;
