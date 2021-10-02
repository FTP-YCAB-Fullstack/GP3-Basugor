const {type, engine, factory} = require('./../models')

const getAll = async (req, res, next) => {
    try {
        let types = await type.findAll(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        )

        let engines = await engine.findAll(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        )

        let factories = await factory.findAll(
            {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        )

        res.status(200).json({types, engines, factories})

    } catch (err) {
        next({code: 500, message: err.message})
    }
}

module.exports = getAll