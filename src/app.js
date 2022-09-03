//* Dependencias
const express = require('express')
const config = require('./config')
const passport = require('passport')
const path = require('path')
const { verbMiddleware } = require('./middleware/ejemplos/verb')
const { db } = require('./utils/dataBase')
require('./middleware/auth.middleware')(passport)

const {database} = require('./utils/dataBase.js')
const initModels = require('./models/initModels')
//* Archivos de Rutas

const userRouter = require('./users/users.router.js').router
const authRouter = require('./auth/auth.router.js').router



//* Configuraciones Iniciales
const app = express()


database.authenticate()
    .then(()=> console.log("Database Authenticated"))
    .catch(err => console.log(err))


database.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));



app.use(express.json())


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.get('/api/v1/uploads/:imgName', (req, res) =>{
    const imgName = req.params.imgName;
    res.status(200).sendFile(path.resolve('uploads/') +'/'+ `${imgName}`)
})


app.listen(config.port, ()=>{
    console.log(`server started at port ${config.port}`)
})


exports.default = app