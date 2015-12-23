// in es5 
function f1(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x+y) * a.length;
}

console.log(f1(1,2,  "hello", true, 7)); // 9

// in es6, remaining arguments are aggregated into single parameter
// of variadic functions
function f2(x, y, ...a) {
    // // works in node 5.3 with --harmony flag
    return (x+y) * a.length;
}
console.log(f2(1,2,  "hello", true, 7)); // 9
