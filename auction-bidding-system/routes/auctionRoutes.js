const express = require('express');
const { createAuction, getAllAuctions, getAuctionById, updateAuction, deleteAuction } = require('../controllers/auctionController');
const authenticateAdmin = require('../middlewares/authenticateAdmin');

const router = express.Router();

router.post('/', authenticateAdmin, createAuction);
router.get('/', getAllAuctions);
router.get('/:id', getAuctionById);
router.put('/:id', authenticateAdmin, updateAuction);
router.delete('/:id', authenticateAdmin, deleteAuction);

module.exports = router;
