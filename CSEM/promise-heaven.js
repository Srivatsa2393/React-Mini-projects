// A "helper" function that creates
// some non-deterministic behavior
'use strict'
function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

/*Please rewrite the program using 
ES2015 Promises and save your code in async/promise-heaven.js. 
You need to add three missing Promises and assign them to the variables welcome, to, and paradise. 
Just like in async/callback-hell.js, please use the randomError() function to simulate non-determinism.

Your objective is to make the following code executable:*/

//Create a random promise

let welcome = new Promise((resolve, reject) => {
    let error = randomError();
    if(error){
        reject(`Oh no!, ${error}`);
        resolve('Welcome');
    }
});

let to = (input) => {
    return new Promise((resolve, reject) => {
        let error = randomError();
        if (error) {
            reject('Srsly?', err);
            resolve(`${input} to`)  
        }
    });
};

let paradise = (input) => {
    return new Promise((resolve, reject) => {
        let error = randomError();
        if(error) {
            reject(`Srsly? ${error}`);
            resolve(`${input} paradise ☁☁`);
        }
    });
};

welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => console.error(err));