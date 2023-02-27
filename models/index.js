const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const databaseConfig = require("../config/database.config.js");

dotenv.config();

const env = process.env.MODE || "development";

// generate mongodb connection url
const url = `mongodb://${databaseConfig[env].host}:${databaseConfig[env].port}`;

// create a new MongoClient
const client = new MongoClient(url);

const db = {};

db.mongodb = client;

module.exports = db;
