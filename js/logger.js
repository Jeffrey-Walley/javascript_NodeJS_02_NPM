// the MODULE WRAPPER FUNCTION

// (function(exports, require, module, __filename, __dirname) {

console.log(__filename);
console.log(__dirname);

const url = 'http://mylogger.io/log';

function log(message) {
    // Send HTTP request
    console.log(message);
}

module.exports = log;

// }); // this is an Immediately Invoked Function Expression (IIFE) and this is the code that wraps modules in NODE