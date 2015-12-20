var obj = {
    nums : [1,2,5,7,10],
    fives : [],
    fillFives: function() {
        this.nums.forEach(function(v) {
            if(v % 5 === 0 )
                this.fives.push(v); // error, fives is undefined
        });
    }
};

console.log(obj.fives);
obj.fillFives();
console.log(obj.fives);
