
const fs = require('fs')
const path  = require('path')
const student = require('../models/studentsModel')


// Data modeling
const students = fs.readFileSync(path.join(__dirname, '../data/students.json')).toString()

const data = JSON.parse(students)


// generate uniquw id

const generateId = () => {

    const id = data[data.length - 1].id + 1
  
    return id
  }
// Get all Students

const getALlStudents = async (req, res) => {

    let data = await student.find()

    res.status(200).json(data)
}



// Get singel Students

const getSingelStudents = async (req, res) => {

    const id = req.params.id

    const singel_data = await student.findById(id)

    res.status(200).json(singel_data)
}
// create Students

const createStudents = async (req, res) => {

    const {name, age, skill} = req.body

    let data = await student.create({
        name,
        age,
        skill
    })


    res.status(200).json(data)
    
}

// update Students

const updateStudents = async (req, res) => {


    const id = req.params.id

    let data = await student.findByIdAndUpdate(id, req.body, {
        new : true
    })
    
    res.status(200).json({
        message :` ${data.name}'s Data is updated successfully`
    })

}
// delete Students

const deleteStudents = async (req, res) => {

    const id = req.params.id

   await student.findByIdAndDelete(id)

   res.status(200).json({
    message :` ${data.name}'s Data is updated successfully`
    })


}



// e xports controllers
module.exports = {
    getALlStudents,
    getSingelStudents,
    createStudents,
    updateStudents,
    deleteStudents
}