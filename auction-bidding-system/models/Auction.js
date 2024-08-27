const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  startPrice: {
    type: Number,
    required: true,
  },
  highestBid: {
    type: Number,
    default: 0,
  },
  highestBidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Auction', AuctionSchema);
