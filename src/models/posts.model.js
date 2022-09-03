const {DataTypes} = require("sequelize")


const {database} = require('../utils/dataBase')

/*

"first_name": "alejandro",
    "last_name": "sanchez",
    "email": "gabriel@gmail.com",
    "password": "$2b$10$Ab55gIlT3Lm3xA2kVRczCOYujRTny2SziPkQW.r083xu3j.tlgXmm",
    "phone": "",
    "birthday_date": "DD/MM/YYYY",
    "rol": "admind",
    "profile_image": "",
    "country": "string",
    "is_active": true,
    "verified": false

*/
const Posts = database.define('posts', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING
    },
    user_id: {
        allowNull: false,
        type: DataTypes.UUID

    },
    active: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },

})


module.exports = Posts