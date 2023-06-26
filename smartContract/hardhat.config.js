require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();



module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: process.env.ALCHEMY_API_KEY,
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    }
  }
};