const express = require ('express')
const dotEnv = require ('dotenv')
dotEnv.config()
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const dbConnect = require ('./database/dbConnect')
const user = require ('./database/models/user')
const userRoute = require ('./routes/userRoute')

const port = process.env.PORT || 3000
// api credentials
const API_SECRET = process.env.API_SECRET 

// creating the server
const app = express()

// middleware for sessions
app.use(session({
    secret : API_SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {}
}))

// setting up view
app.set('view engine', 'ejs')
app.use(expressLayouts)

// serving static files
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false}))

// setting userRoute
app.use('/', userRoute)


const startServer = ()=>{
    try{
        app.listen(port,()=>{
            dbConnect.authenticate()
            console.log(`server connected on http://localhost:${port}`)
        })
    }catch(e){
        console.log(e)
    }
}
startServer()


