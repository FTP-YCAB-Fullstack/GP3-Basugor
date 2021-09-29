const {user} = require('./../models')

class Users {
    static signup = async (req, res, next) => {
        try {
            let {name, email, password} = req.body;

            let exist = await user.findOne({where: {email}})
            console.log(exist)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Users;