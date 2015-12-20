var callbacks = [];
for(var i = 0; i <=2; i++) {
    (function(i) {
        callbacks[i] = function() { return i * 2 };
    })(i);
}
console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());

