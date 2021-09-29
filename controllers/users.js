const {user} = require('./../models');
const bcrypt = require('bcryptjs')

class Users {
    static signup = async (req, res, next) => {
        try {
            let {name, email, password} = req.body;

            console.log(bcrypt.hashSync(password, 10))

            if (!email.includes('@')) {
                return next({code: 400, message: 'Invalid email'})
            }

            let exist = await user.findOne({where: {email}})
            
            if (exist) {
                next({code: 409, message: 'This email is already registered'})
            } else {
                password = bcrypt.hashSync(password, 10)
                let newAccount = await user.create({name, email, password, role: 'user'})
                res.status(201).json(newAccount)
            }

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Users;