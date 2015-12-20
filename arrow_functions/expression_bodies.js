'use strict';
var evens = [2,4,6,8];

var odds = evens.map(function(v) { return v + 1; }); // es5
console.log(odds); //[ 3, 5, 7, 9 ]

odds = evens.map(v => v + 1); // es6, concise it is
console.log(odds); //[ 3, 5, 7, 9 ]

var pairs = evens.map(function(v) { return { even: v, odd: v + 1}; }); // es5
console.log(pairs);
//pairs= evens.map(v => {even: v, odd: v+1}); //es6, error, parentheses around curly braces must
pairs= evens.map(v => ({even: v, odd: v+1})); //es6, can return objects, concise still
console.log(pairs);


var nums = evens.map(function(v, i) { return v + i }); // es5
console.log(nums);

//nums = evens.map(v, i => v + i); // es6, error, parentheses around arrow function
                                   // arguments is must
nums = evens.map((v, i) => v + i);
console.log(nums);
