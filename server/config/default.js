require("dotenv").config();

const config = {
  mongoURI: process.env.MONGO_URL,
  jwtSecret: "secret",
};

module.exports = config;
