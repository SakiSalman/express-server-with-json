const mongoose = require('mongoose')


// admin model scchema
const adminModel = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Name Field is Mandatotory"]
    },
    email : {
        type : String,
        required : [true, "Email Field is Mandatotory"],
        lowercase : true,
        unique : true
    },
    cell : {
        type : String,
        required : [true, "Cell Field is Mandatotory"]
    },
    username : {
        type : String,
        required : [true, "Username Field is Mandatotory"],
        unique : true,
        lowercase : true,
        minLength : 5
    },
    password : {
        type : String,
        required : [true, "Password Field is Mandatotory"]  
      },
    location : {
        type : String,
        required : false,
        default : 'Bangladesh'
    },
    skill : {
        type : String,
        required : false,
        default : 'MERN Stack Developer'
    }

},
{
    timestamps : true
})




// export model
module.exports = mongoose.model('admin', adminModel)