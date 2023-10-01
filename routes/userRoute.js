const express = require('express')
const {home, signIn, signUp, signInUser, signUpUser} = require ('../controllers/userController')
const authenticate = require ('../middleware/authenticateUser')

// server extension
const app = express.Router()

app.get('/',authenticate, home)

app.get('/signup', signUp)

app.post('/signup', signUpUser)

app.get('/signin', signInUser)

module.exports = app