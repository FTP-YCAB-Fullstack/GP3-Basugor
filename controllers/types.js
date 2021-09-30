const enginesRouter = require('../router/enginesRouter');
const { type, motorcycle } = require('./../models')

class Types {
    static getAll = async (req, res, next) => {
        try {
            let data = await type.findAll()
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
        let data = await type.findByPk(req.params.id, {
            include: motorcycle
        })
        
        if(!data) {
            next({code: 404, message: 'Types Not Found, try search another id'})
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
                let data = await type.create({name, 
                    foundedYear: +foundedYear, 
                    foundedCountry})
                res.status(201).json({
                    data
                })
            }
        } catch (error) {
            next({code: 500, message: error.message})
        };
    };
    static patchType = async (req, res, next) => {
        try {
            let { name, foundedYear, foundedCountry } = req.body;

            foundedYear ? foundedYear = +foundedYear : null

            let {id} = req.params;

            let exist = await type.findByPk(id);

            if (!exist) return next({code: 404, message: 'Type not found'})

            const data = await type.update({name, foundedYear,
                 foundedCountry}, {
                where: {id}
            });
            res.status(200).json({
                status: 'Success updated'
            })
        } catch (error) {
            next({
                code: 500, message: error.message
            })
        }
    };
    static deleteType = async (req, res, next) => {
        try {
            let {id} = req.params;
            const data = await type.findByPk(id)
            if (!data) return next({code: 404, message: 'Type not found'})
            data.destroy()
            res.sendStatus(204);
        } catch (error) {
            next({
                code: 500, message: error.message
            });
        }
    }
}

module.exports = Types;
