/*In file arrays/filter.js you see an array with nested arrays as well 
as some initial structure for filtering items based on the numeric value in the nested array. 
Please fill out the missing code pieces, so that the console output is identical to what is shown in the comments in the last 3 lines.*/

let foo = [
  ['a', 9], ['b', 12], ['c', 5], ['d', 7],
];

// greaterThan closure
function greaterThan(min) {
    // TODO
    return foo.filter((result) => {
        return result[1] > min;
    });
  }
  
  let greaterThan5 = /* TODO use Array.filter + greaterThan */;
  console.log('> 5 ', greaterThan5); // > 5  [ [ 'a', 9 ], [ 'b', 12 ], [ 'd', 7 ] ]
  console.log('> 10 ', greaterThan10); // > 10  [ [ 'b', 12 ] ]
  console.log('> 15 ', greaterThan15); // > 15  []