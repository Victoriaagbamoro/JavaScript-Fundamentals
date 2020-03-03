// Hoisting
// Function Declaration
function calculateAge(year){
    console.log(2016 - year);
}
calculateAge(1999);


  function hoist() {
    var message='Hoisting is all the rage!';
    return message;
  }
  
  hoist();

//   This is Function Expression
  var retirement = function(year){   
      console.log(65 - (2016 - year));
  }
  retirement(1990);
  
//   Variable
var age = 23;
console.log(age);

var title = 'microsoft';

function company(){
    var title = 'Microsoft';
    console.log(title);
}
company();
console.log(title);

// Scoping

var a = 'Hello!';
first();

function first(){
    var b = 'Hey!';
    second();

    function second(){
        var c = 'Hi!';
        console.log(a + b + c);
    }
}

function third(){
    var d = 'John';
    console.log(a + d);
}
third();

// This Key Word

// calculateAge(1985);

// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();

var Mark ={
    name: 'Mike',
    yearOfBirth: 1984,

};

Mark.calculateAge() = John.calculateAge();
Mark.calculateAge();