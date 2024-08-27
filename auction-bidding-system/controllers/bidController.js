const Auction = require('../models/Auction');
const Bid = require('../models/Bid');

// Place a bid on an auction
exports.placeBid = async (req, res) => {
  const { id } = req.params;
  const { bidAmount } = req.body;

  try {
    // Find the auction
    const auction = await Auction.findById(id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    // Check if the bid amount is higher than the current highest bid
    if (bidAmount <= auction.highestBid) {
      return res.status(400).json({ message: 'Bid amount must be higher than the current highest bid' });
    }

    // Create a new bid
    const bid = new Bid({
      auctionId: id,
      // userId: req.user.id,
      userId:req.params.id,
      bidAmount,
    });

    await bid.save();

    // Update the auction with the new highest bid
    auction.highestBid = bidAmount;
    auction.highestBidder = req.params.id;
    await auction.save();

    res.status(201).json(bid);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
