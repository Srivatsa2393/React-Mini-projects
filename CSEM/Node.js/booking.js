/*Please complete the code in nodejs/booking.js so that the following program works. 
In the example shown below, you start the program via node booking.js and then input Picard, hit ENTER, and so on. 
You leave the program by entering exit.*/

/*$ node booking.js
Picard
Worf
show
Bookings:  [ 'Picard', 'Worf' ]
exit*/

'use strict'
const events = require('events');

let em = new events.EventEmitter();
let bookings = [];

function performBooking(newBooking) {
  bookings.push(newBooking);
}

//TODO-attach an event handler (callback) that listens for booking events
em.on('booking', performBooking);

//standard input and output streams also use events
process.stdin.on('readable', () => {
    let input = process.stdin.read();
    if(input !== null) {
        let result = input.toString().trim();

        if(result == 'show') {
            console.log('Bookings', bookings);
        }else if(result == 'exit') {
            process.exit(0);
        }else{
            //emit a new event
            em.emit('booking', result);
        }
    }
});