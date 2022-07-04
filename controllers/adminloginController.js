
const bcrypt = require('bcrypt')
const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

// Admin Login 

const adminLogin = async (req, res) => {

    const {email, username, password} = req.body

    // check email

    let login_data = await Admin.findOne({email})

    if (!login_data) {
        res.status(401).json({
            message : 'User not found'
        })
    } else {
        
        if (await bcrypt.compare(password, login_data.password)) {


           const token = jwt.sign({id : login_data._id}, process.env.JWT_SEC, {
            expiresIn: "1d"
        })
            res.status(200).json({
                id : login_data._id,
                name : login_data.username,
                email : login_data.email,
                cell : login_data.cell,
                token : token

            })

        } else {
             res.status(401).json({
            message : 'Wrong Password'
        })
        }
    }
}




// Exports admin Login

module.exports = adminLogin;