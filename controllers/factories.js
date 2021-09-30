const { factory } = require("../models");

class Factories {
  static getAll = async (req, res, next) => {
    try {
      const factories = await factory.findAll();

      res.status(200).json(factories);
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static getId = async (req, res, next) => {
    try {
      let factoriesId = await factory.findByPk(req.params.factoryId);

      if (!factoriesId) {
        next({
          code: 404,
          message: "factory not found",
        });
      } else {
        res.status(200).json(factoriesId);
      }
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static post = async (req, res, next) => {
    try {
      let { nameFactory, president, headquarter, founded } = req.body;

      if (!nameFactory || !president || !headquarter || !founded) {
        return next({
          code: 400,
          message: "invalid input,check the fields again",
        });
      }

      let newFactory = {
        nameFactory,
        president,
        headquarter,
        founded: +founded,
      };

      let data = await factory.create(newFactory);
      res.status(201).json(data);
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static patch = async (req, res, next) => {
    try {
      let { nameFactory, president, headquarter, founded } = req.body;
      let { id } = req.params;

      let exist = await factory.findByPk(id);

      if (!exist) return next({code: 404, message: 'Factory not found'})

      const update = await factory.update(
        {
          nameFactory,
          president,
          headquarter,
          founded: +founded,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(201).json({
        message: "update data success",
      });
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
  static deleteFactories = async (req, res, next) => {
    try {
      let { id } = req.params;

      const deleteFactories = await factory.findByPk(id);

      if (!deleteFactories) return next({code: 404, message: 'Factory not found'})

      deleteFactories.destroy();
      res.sendStatus(204);
    } catch (error) {
      next({
        code: 500,
        message: error.message,
      });
    }
  };
}

module.exports = Factories;
