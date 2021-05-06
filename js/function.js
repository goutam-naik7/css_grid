// closure 

// retain access to variable



var awFunc = function(first){
    var someFunc = function(second){
        return first + second;
    }

    return someFunc;
}

var someMoreFunc = awFunc('awe')
console.log(someMoreFunc('some'));