const URL = 'http://mylogger.io/log';

function log(message) {
//    send an http request
    console.log('log from logger', message);
}

module.exports.log = log;

