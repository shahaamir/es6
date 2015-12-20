var foo = function() { return 1; }
console.log(foo()); // 1

{
    var foo = function() { return 2; }
    console.log(foo()); // 2
}

console.log(foo()); // 2
