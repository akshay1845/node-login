const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require("cors")

require('./config')

app.use(cors())
app.use(express.json())

const loginSchemas = require('./schemas/signupUserSchema')
const userCollection = require('./collections/userSchemaCollection')

const signUpUserMiddleware = require('./middlewares/insertUserMiddleware')
const loginUserMiddleware = require('./middlewares/loginUserMiddleware')

const signupUserController = require('./controllers/signupUserController')
const loginUserController = require('./controllers/loginUserController')


//INSERT USER
app.post( routes.insertUser,signUpUserMiddleware(loginSchemas.signupSchema), signupUserController(userCollection) )

//USER LOGIN
app.post(routes.loginUser, loginUserMiddleware(loginSchemas.loginSchema), loginUserController(userCollection) )


app.listen(3000, ()=> console.log("server started"))