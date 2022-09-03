const Users = require('./user.model')
const Posts = require('./posts.model')

const initModels = () => {
    Users.hasMany(Posts)
    Posts.belongsTo(Users)
}


module.exports = initModels