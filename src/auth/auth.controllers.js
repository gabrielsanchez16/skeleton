const userContorllers = require('../users/user.controllers.js')
const { comparePassword } = require('../utils/crypt')

const loginUser = (email, password) => {
    const user = userContorllers.getUserByEmail(email)


    if(user){
        const verify_password = comparePassword(password, user.password)
        if(verify_password){
            return user
        }
        return false
    }
    return false
}

module.exports = {
    loginUser
}
