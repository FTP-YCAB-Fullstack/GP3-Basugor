class Auth {
    static authentication = (req, res, next) => {
        console.log(req.headers)

        next()
    }
}

module.exports = Auth