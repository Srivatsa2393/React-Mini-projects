/*Handling command line arguments (10%)

Write a program nodejs/sum.js that calculates the sum of all command line arguments that are passed in 
when starting the program.

For example:

$ node sum.js 1 2 3
6*/


//process.argv is an array containing the command line arguments. 
//The first element will be node, the second element will be the name of the JavaScript file. 
//The next elements will be any additional command line arguments.

'use strict'
let sum = 0;

for(var i = 2; i< process.argv.length; i++) {
    sum = sum + Number(process.argv[i]);
}

console.log(sum);

//or

let sum = 0;
process.argv.slice(2).forEach((value, index, array) => {
    if(!isNaN(value)) {
        sum = sum + parseFloat(value);
    }
})

 
