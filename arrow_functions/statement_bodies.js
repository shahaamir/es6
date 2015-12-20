'use strict';

var nums = [1,2,5,7,10,13,15];
var fives = [];

nums.forEach(function(v) {
    if(v % 5 === 0)
        fives.push(v);
});
console.log(fives);

fives = [];
nums.forEach(v => {
    if(v % 5 === 0)
        fives.push(v);
});
console.log(fives);
