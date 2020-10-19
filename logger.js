const path = require('path');
const patchObj = path.parse(__filename);


function log(message) {
//    send an http request
    console.log('log from logger', message);
}
console.log(module);
console.log(patchObj);
module.exports = log;

