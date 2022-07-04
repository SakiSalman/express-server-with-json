const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')




// Get all admins
const getalladmins = async (req, res) => {
       let data = await  Admin.find()

       res.status(200).json(data)
}
// Get singel admins
const getsingeladmins = async (req, res) => {

    let id = req.params.id
    let data = await Admin.findById(id)
    
    res.status(200).json(data)
}
// Post singel admins
const createAdmin = async (req, res) => {

   const {name, email, cell, username, password, location, skill} = req.body

//    Has Password Here
   let salt = await bcrypt.genSalt(10)
   const haspassword = await bcrypt.hash(password, salt)
   console.log(haspassword);
// Create Data Now With Has Passeord
   if(!name || !email || !cell || !username || !password){
    res.status(200).json({
        message : 'ALl Fields are Required'
    })
   }else{


    await Admin.create({
        ...req.body,
        password : haspassword
       }) 
       res.status(200).json({
        message : 'Admin Created'
    })

   }

   
}
// update  singel admins
const updateAdmin = async (req, res) => {
    let id = req.params.id
    let data = await Admin.findByIdAndUpdate(id)
    res.status(200).json(`Hi Mr Developer! ${data.name}'s Data is Updated Successfully!`)
}
// delete  singel admins
const deleteAdmin = async (req, res) => {
    let id = req.params.id


    const delete_data = await Admin.findById(id)
    if (!delete_data) {

        res.status(401).json('data not found')
        
    } else {
        let id = req.params.id
    let data = await Admin.findByIdAndDelete(id)
    res.status(200).json(`Hi Mr Developer! ${data.name}'s Data is deleted Successfully!`)
    }
    
}


// Login Admin
const adminProfile = (req, res) =>{

 res.json(req.user)

}
const adminHome = (req, res) =>{

    res.json(req.user)
}




module.exports = {
    getalladmins,getsingeladmins, createAdmin, updateAdmin, deleteAdmin, adminProfile, adminHome
}