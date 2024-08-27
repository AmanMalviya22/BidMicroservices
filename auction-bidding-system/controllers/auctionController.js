const Auction = require('../models/Auction');
const Bid = require('../models/Bid');

// Create a new auction
exports.createAuction = async (req, res) => {
  const { itemName, startTime, endTime, startPrice } = req.body;

  try {
    const auction = new Auction({ itemName, startTime, endTime, startPrice });
    await auction.save();
    res.status(201).json(auction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all ongoing auctions
exports.getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({ endTime: { $gte: new Date() } });
    res.json(auctions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get auction by ID
exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.json(auction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update auction by ID
exports.updateAuction = async (req, res) => {
  const { itemName, startTime, endTime, startPrice } = req.body;
  try {
    const auction = await Auction.findByIdAndUpdate(req.params.id, { itemName, startTime, endTime, startPrice }, { new: true });
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.json(auction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete auction by ID
exports.deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndDelete(req.params.id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.json({ message: 'Auction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
