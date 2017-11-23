// Cat.prototype = {
//   speak: function () {
//     return this.meow;
//   }
// };

// LoudCat.prototype = {
//   shout: function () {
//     return this.meow.toUpperCase() + '!!';
//   },
//   speak: function () {
//     if (this.loud) {
//       return this.shout();
//     } else {
//       return this.meow;
//     }
//   }
// };

/* Object creation (10%)

Take a look at file objects/object-literal.js where a Cat and a LoudCat object are created. 
Please re-write the code using the object constructor pattern in lieu of the object literal pattern.
*/

//Object literal style notation
'use strict';
function Cat(meow){
    this.meow = meow;
}

Cat.prototype.speak = function () {
    return this.meow;
}

Cat.prototype.constructor = Cat;


function LoudCat(loud, meow) {
    Cat.call(this, meow);
    this.loud = loud;
}

LoudCat.prototype.shout = function () {
    return this.meow.toUpperCase() + '!!';
}

LoudCat.prototype.speak = function () {
    if (this.loud) {
            return this.shout();
            } else {
            return this.meow;
        }
}

LoudCat.prototype.constructor = LoudCat;

let loudCat = new LoudCat(true, 'meoww');
console.log(loudCat.speak());
loudCat.loud = false;
console.log(loudCat.speak());