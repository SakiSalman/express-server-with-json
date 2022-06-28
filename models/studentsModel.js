const mongoose = require('mongoose')
const { stringify } = require('qs')


const studentsModel = mongoose.Schema({
    name : String,
    age : String,
    skill : String
},{
    timestamps : true
})



module.exports = mongoose.model('Student', studentsModel)