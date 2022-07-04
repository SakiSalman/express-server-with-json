const express = require('express');
const { getalladmins, getsingeladmins, createAdmin, updateAdmin, deleteAdmin, adminProfile, adminHome } = require('../controllers/adminController');
const adminLogin = require('../controllers/adminloginController');
const authCheck = require('../middleware/authcheck');

const router = express.Router();

// Login Router
router.post('/login', adminLogin)

router.get('/profile', authCheck, adminProfile)
router.get('/home', authCheck, adminHome)

// admin servers

router.get('/', getalladmins)
router.get('/:id', getsingeladmins)
router.post('/', createAdmin)
router.patch('/:id', updateAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)






module.exports = router;