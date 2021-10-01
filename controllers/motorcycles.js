const {motorcycle, engine, type, factory} = require('./../models')


class motorcycles {
    static getAll = async (req, res, next) => {
        try {
            let data = await motorcycle.findAll(
                {
                    include: [
                        {
                            model: engine,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: factory,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: engine,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: type,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'engineId', 'typeId', 'factoryId']
                    }
                }
            )

            res.status(200).json(data)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            let data = await motorcycle.findByPk(req.params.id, 
                {
                    include: [
                        {
                            model: engine,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            },
                        },
                        {
                            model: factory,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: engine,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: type,
                            attributes: {
                                exclude: ['id','createdAt', 'updatedAt']
                            }
                        }
                    ],
                    attributes: {
                        exclude: ['engineId', 'factoryId', 'typeId', 'createdAt', 'updatedAt']
                    }
                }
            )

            if (!data) {
                next({code: 404, message: 'Motorcycle is not found, try another id'})
            } else {
                res.status(200).json(data)
            }
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static postMotor = async (req, res, next) => {
        try {
            let {motorName, price, factoryId, engineId, typeId, releaseYear} = req.body;
            
            if (!motorName || !price || !factoryId || !engineId || !typeId || !releaseYear) {
                return next({code: 400, message: 'Invalid input, check the fields again'})
            }

            let exist = await motorcycle.findOne({where: {motorName}});

            if (exist) return next({code: 409, message: 'Motorcycle is already exist!'})


            let data = await motorcycle.create({
                    motorName, 
                    price: +price, 
                    factoryId: +factoryId, 
                    engineId: +engineId, 
                    typeId: +typeId,
                    releaseYear: +releaseYear
                }
            )

            res.status(201).json(data)

        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static updateMotor = async (req, res, next) => {
        try {
            let {motorName, price, factoryId, engineId, typeId, releaseYear} = req.body;
            let data = await motorcycle.findByPk(req.params.id);

            if (!data) {
                return next({code: 404, message: 'Motorcycle not found'})
            } else {
                data.motorName = motorName || data.motorName;
                data.price = price || data.price;
                data.factoryId = factoryId || data.factoryId;
                data.engineId = engineId || data.engineId;
                data.typeId = typeId || data.typeId;
                data.releaseYear = releaseYear || data.releaseYear;
                await data.save()
            }

            res.status(200).json(data)

        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static deleteMotor = async (req, res, next) => {
        try {
            let data = await motorcycle.findByPk(req.params.id);

            if (!data) {
                next({code: 400, message: 'Motorcycle is not found'})
            } else {
                await data.destroy()
                res.sendStatus(204)
            }
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
}

module.exports = motorcycles