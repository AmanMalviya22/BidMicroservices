module.exports = (req, res, next) => {
    const apiSecret = req.headers['x-api-secret'];
    if (apiSecret && apiSecret === process.env.ADMIN_API_SECRET) {
      return next();
    }
    return res.status(401).json({ message: 'Unauthorized' });
  };
  