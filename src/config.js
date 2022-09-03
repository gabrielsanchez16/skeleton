require("dotenv").config()
module.exports = {
    port: process.env.PORT || 8000,
    secret: process.env.SECRET
}