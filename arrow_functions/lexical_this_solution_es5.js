var obj = {
    nums : [1,2,5,7,10],
    fives : [],
    twos: [],
    fillFives: function() {
        var self = this; // using self
        this.nums.forEach(function(v) {
            if(v % 5 === 0 )
                self.fives.push(v);
        });
    },
    fillTwos: function() {
        this.nums.forEach(function(v) {
            if(v % 2 === 0 )
                this.twos.push(v);
        }.bind(this)); // using bind
    },
};

console.log(obj.fives); // []
obj.fillFives();
console.log(obj.fives); // [5,10]

console.log(obj.twos); // []
obj.fillTwos();
console.log(obj.twos); // [2, 10]
