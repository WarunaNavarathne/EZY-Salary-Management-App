const express = require('express')
const router = express.Router()
const { addSalary, updateSalary, deleteSalary, allSalary, oneSalary } = require('../controllers/salary')
const { protect } = require('../middleware/authMiddleware')


router.post('/addsalary', protect, addSalary)
router.put('/updatesalary', protect, updateSalary)
router.put('/deletesalary/:code', protect, deleteSalary)
router.get('/allsalary', protect, allSalary)
router.get('/allsalary/:searchName', protect, oneSalary)


module.exports = router;