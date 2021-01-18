/* function sayHello(name) {
    console.log('Howdy Folks, it\s me ' + name);
} */ // sayHello('Trelvyn');

/* setTimout() // global function__ set a delay after a function is called
clearTimeout(); // global 

setInterval() // global 
clearInterval() */ // global

// console.log(); // global


// console.log(module); shows info about the file in node -- every file is a module in node

/* const logger = require('./logger.js');

logger('Happy Christmas Everyone in Syrupsport'); // will output 'happy chrismtas..' in terminal below when entering node ./js/main */

const _ = require('lodash'); // pulls lodash module in (the convention var for lodash is the '_' underscore <or lodash>)

const numbers = [33, 26, 75, 44, 32, 5, 19, 01, 87, 73, 04];

_.each(numbers, function(number, i) {
    console.log(number);
});