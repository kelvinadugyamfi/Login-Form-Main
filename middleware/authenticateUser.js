// creating an authentication middleware to check if the user is valid

const session = require ('express-session')

const isUserAuthenticated = (req, res, next) => {
    if(req.session.user){
        return next()
    }
    res.render ('pages/signup')
}

module.exports = isUserAuthenticated