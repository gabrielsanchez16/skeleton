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
const Users = database.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    first_name: {
        allowNull: false,
        type: DataTypes.STRING

    },
    last_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            min: 10,
            max: 10
        }
    },
    birthday_date: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    profile_image: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING
    },
    is_active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})


module.exports = Users