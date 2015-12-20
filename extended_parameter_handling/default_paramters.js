// does not work with node 5.3

// the problem: check for each parameter
// and assign them default values
function f1(x,y,z) {
    if(y === undefined) {
        y = 7;
    }
    if(z === undefined) {
        z = 42;
    }
    return x + y + z;
};
console.log(f1(1)); // 50


// solution in es6, assign default
// values easily in function parameter declaration
function f2(x, y=7, z=42) {
    return x + y + z;
}

console.log(f2(1)); // 50
