const express = require('express');
const { getALlStudents, getSingelStudents, createStudents, updateStudents, deleteStudents } = require('../controllers/studentsController');

const router = express.Router()



// create Routers

router.get('/', getALlStudents)
// get singel students Routers

router.get('/:id', getSingelStudents)
// create students routers
router.post('/', createStudents)

// update students routers
router.patch('/:id', updateStudents)
router.put('/:id', updateStudents)
// delete student Roiuters
router.delete('/:id', deleteStudents)







module.exports = router;