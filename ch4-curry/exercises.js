var _ = require('ramda');


// Exercise 1
//==============
// Refactor with `_.curry` to partially apply the string separator

var words = _.curry(_.split)(' ');

// Exercise 1a
//==============
// Use `map` to make a function that applies `words` over an array of strings.

// LEAVE BE:
var map = _.curry(function map(f, xs) { return xs.map(f); });

var sentences = map(words);


// Exercise 2
//==============
// Refactor to use curried versions of `filter` and `match` to define `filterQs`

var filter = _.curry(_.filter);
var match = _.curry(_.match);

var filterQs = filter(match(/q/i));


// Exercise 3
//==============
// Using `_keepHighest`, refactor `max` to be the result of a curried `reduce`

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

var reduce = _.curry(_.reduce);

// REFACTOR THIS ONE:
var max = reduce(_keepHighest)(-Infinity);


// Bonus 1:
// ============
// Wrap the array's `slice` method as a curried function.
// //[1,2,3].slice(0, 2)
var slice = _.curry(function(from, to, arr) {
	return arr.slice(from, to);
});


// Bonus 2:
// ============
// Using `slice`, define `take` as a higher order function that will take
// the first n elements from a string.
// Result for take(4)("Something") should be "Some"
var take = slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
