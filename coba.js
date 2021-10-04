const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

console.log(bcrypt.hashSync('admin123',10))

console.log(jwt.destroy)