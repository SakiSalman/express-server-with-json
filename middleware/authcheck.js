const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')

// auth Middle ware

const authCheck = async (req, res, next) => {
    


    if (req.headers.authorization) {
        
       try {
        const token = req.headers.authorization.split(' ')[1]

        const {id} = jwt.verify(token, process.env.JWT_SEC)

         req.user = await Admin.findById(id)


        next();


       } catch (error) {
        console.log(error);
       }


    }else{
        res.status(401).json({
            message : 'Authorization Faild'
        })
    }


}



// authentication check exports
module.exports = authCheck;