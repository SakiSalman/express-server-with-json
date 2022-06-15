
const fs = require('fs')
const path  = require('path')


// Data modeling
const students = fs.readFileSync(path.join(__dirname, '../data/students.json')).toString()

const data = JSON.parse(students)


// generate uniquw id

const generateId = () => {

    const id = data[data.length - 1].id + 1
  
    return id
  }
// Get all Students

const getALlStudents = (req, res) => {

    res.status(200).json(data)
}



// Get singel Students

const getSingelStudents = (req, res) => {

    const id = req.params.id

    const singel_data = data.find(data => data.id == id)

    res.status(200).json(singel_data)
}
// create Students

const createStudents = (req, res) => {

    const {name, age, skill} = req.body

    data.push({
        id : generateId(),
        name : name,
        age : age,
        skill : skill
    })

    fs.writeFileSync(path.join(__dirname, '../data/students.json'), JSON.stringify(data))

    res.status(200).json(data)
    
}

// update Students

const updateStudents = (req, res) => {

    res.json({
        message: 'Singel done'
    })
}
// delete Students

const deleteStudents = (req, res) => {

    res.json({
        message: 'Singel done'
    })
}







module.exports = {
    getALlStudents,
    getSingelStudents,
    createStudents,
    updateStudents,
    deleteStudents
}