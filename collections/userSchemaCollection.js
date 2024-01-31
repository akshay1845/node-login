const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    contact : Number,
    password : String
})

module.exports = mongoose.model('registerUsers', userSchema )