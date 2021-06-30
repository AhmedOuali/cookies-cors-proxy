process.env.NODE_ENV = process.env.NODE_ENV || "development";
const path = require('path');

const development = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: 8181,
};

const production = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: 8181,
};

module.exports = process.env.NODE_ENV === "production" ? production : development;
