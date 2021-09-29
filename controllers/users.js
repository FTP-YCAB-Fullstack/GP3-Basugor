const userModel = require('../models').user


class Users {
    static login = async (req,res,next)=>{
        try {
            const {email,password} = req.body
            const user = await userModel.findOne({
                where:{
                    email:email
                }
            })
        } catch (error) {
            next(error)
        }
    }
}
