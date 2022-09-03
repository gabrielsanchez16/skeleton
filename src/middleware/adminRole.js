const roleAdmindMiddleware = (req,res,next) => {
    const rol = req.user.rol

    if(rol === "admind"){
        next()
    }else{
        res.status(401).json({status: 'error', message: 'User not authorized to make this request'})
    }
}


module.exports = {
    roleAdmindMiddleware
} 