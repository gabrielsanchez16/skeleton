const uuid = require('uuid')
const crypt = require('../utils/crypt.js')
const Users = require('../models/user.model')

const userDB = [{
    "id": "c38c070f-4512-4065-bf1c-8b0d09cd4571",
    "first_name": "alejandro",
    "last_name": "sanchez",
    "email": "gabriel@gmail.com",
    "password": "$2b$10$Ab55gIlT3Lm3xA2kVRczCOYujRTny2SziPkQW.r083xu3j.tlgXmm",
    "phone": "123",
    "birthday_date": "16/08/2002",
    "rol": "admind",
    "profile_image": "",
    "country": "colombia",
    "is_active": true,
    "verified": false
}, {
    "id": "e91a4d77-664d-4ce5-8b81-78f90856bfd5",
    "first_name": "pibe",
    "last_name": "valderrama",
    "email": "valderrama@gmail.com",
    "password": "$2b$10$s0hOZfda/gLCXNS/EveTcuo42W3fLvwYBFTvoTrJjfgnZTHzKOYTm",
    "phone": "3146036737",
    "birthday_date": "16/08/1965",
    "rol": "normal",
    "profile_image": "g334dg",
    "country": "colombia",
    "is_active": true,
    "verified": false
}]



const getAllUsers = async () => {
    const data = await Users.findAll({
        attributes: {
            exclude: ['password', 'is_active']
        }
    })

    return data;
}


const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: ['password', 'is_active']
        }
    })
    return data

    //? select * from users where id = ${id};
}

const createUser = async (data) => {

    const newUser = await Users.create({
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: crypt.hashPassword(data.password),
        phone: data.phone ? data.phone : '',
        birthday_date: data.birthday_date,
        rol: "normal",
        profile_image: data.profile_image,
        country: data.country,
        is_active: true,
        verified: false,
    })
    return newUser
};


const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id
        }
    })
    return data
}

const editUser = async(userId, data, userRol) => {
    if(userRol === 'admin'){
       const {password,id,verified, ...newData} = data
        const response = await Users.update({
            ...newData
            
            },{
                where:{
                    id: userId
                }
            })
            return response
    }else{
        const {password,id,verified,role, ...newData} = data
        const response = await Users.update({
            ...newData
            
            },{
                where:{
                    id: userId
                }
            })
            return response
    }


 
}
const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            id: email
        },
        attributes: {
            exclude: ['password', 'is_active']
        }
    })
    return data
}


const editProfileImg = async (userId, imgUrl) => {
        const response = await Users.update({
            profile_image: imgUrl
            
            },{
                where:{
                    id: userId
                }
            })
            return response
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    getUserByEmail,
    editProfileImg
}