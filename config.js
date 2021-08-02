"use strict";

/** Shared config for locinfo; can be required in multiple places */

// DotEnv is a simple Node.js library for loading environment variables from .env files
require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const access_key = process.env.API_ACCESS_KEY;
const secret_key = process.env.API_SECRET_KEY;

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or production database
function getDatabaseUri() {
    return (process.env.NODE_ENV === "test") ? "locinfo_test" : process.env.DATABASE_URL || "locinfo";
}

console.log("LocInfo Config:".bold.blue);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("DATABASE_URL:".yellow, getDatabaseUri());
console.log("-----");

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
    access_key,
    secret_key
}