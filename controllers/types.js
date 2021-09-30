const { types } = require('./../models')

class Types {
    static getAll = async (req, res, next) => {
        try {
            let data = await types.findAll()
            res.status(200).json({
                data
            })
        } catch (error) {
            next({
                code: 500, message: error.message
            })
        };
    };
}

module.exports = Types;
