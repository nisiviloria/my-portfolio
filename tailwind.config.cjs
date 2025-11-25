// Simple bridge to your ESM tailwind.config.js
const config = require('./tailwind.config.js');
module.exports = config.default || config;
