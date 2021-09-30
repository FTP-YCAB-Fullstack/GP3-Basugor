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
    static getDetail = async (req, res, next) => {
        try {
        let data = await types.findByPk(req.params.id)
        
        if(!data) {
            next({code: 404, message: 'Types Not Found, try search id'})
        } else {
        res.status(200).json({
            data
          })
        };
        } catch (error) {
            next({ 
                code: 500, message: error.message
            })
        }
    };
    static postTypes = async (req, res, next) =>{
        try {
            let { name, foundedYear, foundedCountry } = req.body;
            
            if (!name || !foundedYear || !foundedCountry) {
                next({
                    code: 400, message: 'post invalid'
                })
            } else {
                let data = await enginesRouter.create({name, foundedYear, foundedCountry})
                res.status(201).json({
                    data
                })
            }
        } catch (error) {
            next({code: 500, message: error.message})
        };
    };
}

module.exports = Types;
