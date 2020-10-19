const path = require('path');
const patchObj = path.parse(__filename);

const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

function log(message) {
//    send an http request
    console.log('log from logger', message);
}
// console.log(module);
// console.log(patchObj);
console.log('totalmem',totalMemory);
console.log('freemem',freeMemory);
module.exports = log;

