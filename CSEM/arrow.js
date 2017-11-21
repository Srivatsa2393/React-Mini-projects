/*From ES5 to ES2015 anonymous functions (5%)

Open the file function/arrow.js. The console output of listHotels() should be:

Vulcan Inn Mars
Vulcan Inn Jupiter*/

'use strict'

var hotelChain = {
    _name: 'Vulcann Inn',
    _hotels: [{ location : 'Mars'}, { location: 'Jupiter'}],
    listHotels() {
        this._hotels.forEach((hotel) => {
            console.log(this._name + ' ' + hotel.location)
        }, this)
    },
};