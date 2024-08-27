### Auction Management and Bidding System
This project is a Node.js-based microservices application for managing auctions and user bidding. It consists of two main services: User Management and Auction Management.

## Table of Contents
### Features
### Project Structure
### Installation
### Environment Variables
### Usage
### API Documentation
Contributing
License

### Features
User Management: Handles user registration, login, and authentication.
Auction Management: Allows administrators to create, update, and manage auctions.
Bidding: Authenticated users can place bids on active auctions.
Admin Panel: Admin users can view all auctions and user data.
Token-based Authentication: Ensures secure access to resources.

### Project Structure

```bash
├── controllers
│   ├── authController.js
│   ├── userController.js
│   ├── auctionController.js
│   └── bidController.js
├── middlewares
│   ├── auth.js
│   ├── apiSecret.js
├── models
│   ├── User.js
│   ├── Auction.js
│   └── Bid.js
├── routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── auctionRoutes.js
│   └── bidRoutes.js
├── config
│   └── db.js
├── .env
├── server.js
├── package.json
└── README.md
```


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/auction-management-system.git
   cd auction-management-system
   ```

2.Install dependencies:
```bash
 npm install
 ```

3.Set up environment variables:
Create a .env file in the root directory with the following content:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auctiondb
JWT_SECRET=your_jwt_secret
ADMIN_API_SECRET=your_admin_api_secret
```

4.start the server
```bash
  npm start or node app.js
```

### Environment Variables
PORT: Port number for the server.
MONGODB_URI: MongoDB connection string.
JWT_SECRET: Secret key for signing JWT tokens.
ADMIN_API_SECRET: Secret key for authenticating admin requests.

### API Documentation
you can see my postman documentation for it. Here is the uri of it.

https://documenter.getpostman.com/view/28291997/2sAXjGcuFK




