/*Array map and reduce methods (15%)

Compute an array with words and their "weighted word count". 
In the context of this exercise, weighted word count is defined as: Sum of 
(word occurrences in a doc multiplied with the weight of the doc)

There are different ways to accomplish this task. 
Please follow the instructions in the given code structure and complete the missing pieces in file arrays/mapreduce.js:*/

// The document array contains nested [text,weight] arrays.
const documents = [
    ['Hello world', 3],
    ['Hello foo', 1],
    ['foo bar foo', 5],
  ];
  
  // Use Array.map() to produce this intermediary result:
  // [ [ 3, [ 'Hello', 'world' ] ],
  //   [ 1, [ 'Hello', 'foo' ] ],
  //   [ 5, [ 'foo', 'bar', 'foo' ] ] ]
  let wordArray = documents.map(word => {
      return [word[1], word[0].split(' ')];
  }); // TODO
  
  // Use Array.map() to transform the previous array into this:
  // [ [ [ 'Hello', 3 ], [ 'world', 3 ] ],
  //   [ [ 'Hello', 1 ], [ 'foo', 1 ] ],
  //   [ [ 'foo', 5 ], [ 'bar', 5 ], [ 'foo', 5 ] ] ]
  let wordMap = wordArray.map((word) => {
      return word[1].map((subArr) => {
          return [subArr, word[0]];
      })
  }); // TODO
  
  // Flatten the array that the last step produced by using Array.reduce()
  // and Array.concat()
  // The resulting array should look like this:
  // [ [ 'Hello', 3 ],
  //   [ 'world', 3 ],
  //   [ 'Hello', 1 ],
  //   [ 'foo', 1 ],
  //   [ 'foo', 5 ],
  //   [ 'bar', 5 ],
  //   [ 'foo', 5 ] ]
  let flatWordMap = wordMap.reduce((prev, curr) => {
      return prev.concat(curr)
  },[]); // TODO
  
  // Use Array.reduce() to produce this final result:
  // { Hello: 4, world: 3, foo: 11, bar: 5 }
  let weightedWordCount = flatWordMap.reduce((prev, curr) => {
      return prev;
  },{}); // TODO
  console.log(weightedWordCount);