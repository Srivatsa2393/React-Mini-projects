/*In file objects/flight.js, you see a program with two "classes" of objects: MarsFlight and FastMarsFlight.

Please rewrite the program using ES2015 class syntax (constructor, extends, super, etc.)

Save your ES2015 code in objects/flight-es2015.js.*/

/*'use strict'
var MarsFlight = function (outbounddate, speed) {
    this.speed = speed || 1; // default speed is 1
    this.outbounddate = outbounddate || 'February 19, 2017'; // the departure date
    this.originplace = 'Earth'; // the departure location
    this.destinationplace = 'Mars'; // the destination location
  };

// duration of flight in milliseconds
MarsFlight.prototype.duration = function () {
  return (63070000000 / this.speed);
};

// duration in days, as info for the passengers
MarsFlight.prototype.durationInDays = function () {
    return Math.round(this.duration() / (1000 * 60 * 60 * 24));
  };

// arrival date as string
MarsFlight.prototype.getInboundDate = function () {
      return new Date(Date.parse(this.outbounddate) + this.duration());
    };

var FastMarsFlight = function (outbounddate) {
  // Call the parent constructor
  // Fast flights with 3X normal speed
  MarsFlight.call(this, outbounddate, 3);
};

// Create a FastMarsFlight.prototype object that inherits from MarsFlight.prototype.
FastMarsFlight.prototype = Object.create(MarsFlight.prototype);

// Set the "constructor" property to refer to FastMarsFlight
FastMarsFlight.prototype.constructor = FastMarsFlight;

var plannedDeparture = 'February 20, 2017';
var marsFlight = new MarsFlight(plannedDeparture);
var fastMarsFlight = new FastMarsFlight(plannedDeparture);

console.log('The RyanAir Mars flight will take ca. ' + marsFlight.durationInDays() + ' days (ETA: ' + marsFlight.getInboundDate() + ').');

console.log('Maybe we should upgrade to Elon Emirates and fly there in ' + fastMarsFlight.durationInDays() + ' days.');*/

class MarsFlight{
    constructor(outbounddate, speed) {
        this.speed = speed || 1; // default speed is 1
        this.outbounddate = outbounddate || 'February 19, 2017'; // the departure date
        this.originplace = 'Earth'; // the departure location
        this.destinationplace = 'Mars'; // the destination location
    }

    // duration of flight in milliseconds
    duration() {
        return (63070000000 / this.speed);
    }

    // duration in days, as info for the passengers
    durationInDays() {
        return Math.round(this.duration() / (1000 * 60 * 60 * 24));
    }

    // arrival date as string
    getInboundDate() {
        return new Date(Date.parse(this.outbounddate) + this.duration());
    }
}

class FastMarsFlight{
    constructor(outbounddate){
        // Call the parent constructor
        // Fast flights with 3X normal speed
        super(outbounddate, 3);
    }
}

let plannedDeparture = 'February 20, 2017';
let marsFlight = new MarsFlight(plannedDeparture);
let fastMarsFlight = new FastMarsFlight(plannedDeparture);

console.log(`The RyanAir Mars flight will take ca. ${marsFlight.durationInDays()} days (ETA: ${marsFlight.getInboundDate()}).`);
console.log(`Maybe we should upgrade to Elon Emirates and fly there in ${fastMarsFlight.durationInDays()} days.`);