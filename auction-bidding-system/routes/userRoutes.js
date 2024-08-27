const express = require('express');
const { getUser, updateUser, deleteUser, getAllUsers } = require('../controllers/userController');
const authenticateUser = require('../middlewares/authenticateUser');
const authenticateAdmin = require('../middlewares/authenticateAdmin');

const router = express.Router();

router.get('/:id', authenticateUser, getUser);
router.put('/:id', authenticateUser, updateUser);
router.delete('/:id', authenticateUser, deleteUser);
router.get('/', authenticateAdmin, getAllUsers);

module.exports = router;
