const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DB_NAME,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
  },
  production: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DB_NAME,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
  },
};
