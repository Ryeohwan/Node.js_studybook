const os = require('os');
const path = require('path');
os.uptime();
console.log(path.join(__dirname, '..', 'var.js'));
console.log(path.resolve(__dirname,'..','/var.js'));