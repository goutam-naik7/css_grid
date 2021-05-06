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



// function User(name, age)
// {
//     this.name = name;
//     this.age = age;
    
//     this.getProfile = function(){
//     // outer
//         console.log(this.name);

//      return function() {
        
//         // inner
//         console.log(this.name);
//          console.log("Im " + this.name + " and " + this.age + " year old");
//      }
//     }
// }


// var user = new User('John', 25);
// var profile = user.getProfile();

// profile();


// using arrow function we can fix inner function  context issue

function User(name, age)
{
    this.name = name;
    this.age = age;
    
    this.getProfile = function(){
    // outer
        console.log(this.name);

     return () => {
        
        // inner
        console.log(this.name);
         console.log("Im " + this.name + " and " + this.age + " year old");
     }
    }
}


var user = new User('John', 25);
var profile = user.getProfile();

profile();

