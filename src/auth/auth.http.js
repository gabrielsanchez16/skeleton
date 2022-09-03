const jwt = require('jsonwebtoken');
const config = require('../config')

const {loginUser} = require('./auth.controllers.js');

const login = (req, res) => {
    const data = req.body;
    
    if(!data.email || !data.password){
        return res.status(400).json({message:'Missing Data'})
    }

    const response = loginUser(data.email, data.password)

    if(response){
        const token = jwt.sign({
            id: response.id,
            email: response.email,
            rol: response.rol
        }, config.secret)
        return res.status(200).json({message: 'Tus Credenciales son correcta', token: token })
    }else{
        return res.status(401).json({message: 'Invalid Credentials'})
    }


} 

module.exports = {
    login
}