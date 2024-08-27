const express = require('express');
const { placeBid } = require('../controllers/bidController');
const authenticateUser = require('../middlewares/authenticateUser');

const router = express.Router();

router.post('/:id/bid', authenticateUser, placeBid);

module.exports = router;
