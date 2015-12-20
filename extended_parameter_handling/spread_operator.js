// in es5, array of arguments were applied to function
// using "apply" 
function f1(x,y, ...a) {
    return (x + y) * a.length;
}

var params = ["hello", true, 7]
var other  = [1, 2].concat(params);
console.log(f1.apply(undefined, [1,2].concat(params))); // 9


// in es6, we can expand the array into individual parameters
// using the spread operator
console.log(f1(1,2,...params)); // 9
