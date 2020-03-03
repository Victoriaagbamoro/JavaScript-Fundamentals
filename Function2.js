// Functions

// function calculateAge(birthYear){
//     return 2018-birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJonas = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJonas);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years');

//     if (retirement > 0 ){
//         console.log(firstName + 'retires in' + retirement + ' years');
//     } else{
//         console.log(firstName + 'is already retired');
//     }

// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jonas');

// Code Challenge
// Function Declaration
// function whatDoYouDo(job, firstName){
// }

// Function Expressions
// var whatDoYouDo = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';

//         case 'driver':
//             return firstName + ' is a driver in Libson. ';

//         case 'designer':
//             return firstName + ' is a fashion designer in Libson.';
//         default:
//             return firstName + ' do something else ';
//     }
// }
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('driver', 'Mark'));

// var myFavoriteSmoothie = function(typeOfSmoothie, Name){
//     switch(typeOfSmoothie){
//         case 'almond banana smoothie':
//             return Name + ' loves almond banana smoothie.';
//         case 'chocolate mint smoothie':
//             return Name + ' loves chocolate mint smoothie.';
//         case 'pineapple green protein smoothie':
//             return Name + ' loves pinapple green protein smoothie.';
//         case 'viggie carrot':
//             return Name + ' loves viggie carrot.';
//         default:
//             return Name + ' non of my favorite is listed.';
//     }
// }
// console.log(myFavoriteSmoothie(
//     'almond banana smoothie', 
//     // 'chocolate mint smoothie',
//     // 'pineapple green protein smoothie',
//     // 'viggie carrot',
//  'Victoria'));
// console.log(myFavoriteSmoothie('chocolate mint smoothie', 'John'));


// function smoothie(name){
//     var smth = 'Ona Juice';
//     var smth2 = 'Nuli juice';
//     var smth3 = 'Ify Juice';
//      if(smth !==  'Ona' && smth === 'ona Juice'){
//          return name + ' favorite smoothie shop is Ona Juice';
//      }else if(smth2 === 'Nuli Lounge '){
//          return name + ' loves Nuli, Nuli is my good but i love Ona Juice more';

//      }else if (smth3 === ' Ify Juice '){
//          return name + 'will prefer to go for Ona Juice more';
//      }else{
//          return 'I love Ona Juice, thats my preferred.'
//      }
// }

// console.log(smoothie('Victoria')) ;


// const myArray = 
// ['Victoria', 'Grace', 'love', 'beauty',];
// myArray[0] = 'beauty';
// myArray[4] = 'Hannah';
// myArray[5] = 'Purple';
// myArray[6] = 'Amara';
// console.log(myArray);

// const avengers = 
// ['Captain America', 'Marvel', 'Black Patner', 'Wonder woman'];
// // avengers.pop();
// // avengers.shift();
// avengers.push('America');
// console.log(avengers);

// const list = new Set();
// list.add(1).add(2).add(3).add(4).add(5).add(6).add(7);
// console.log(list);
// const moreNumbers = new Set([7,7,7,8,8,9,9]);
// console.log(moreNumbers);
// const letters = new Set('hello');
// console.log(letters);

// const word = new Set().add('love').add('Quick').add('Focus');
// console.log(word);
// const jla = new Set().add('superman').add('Batman').add('Wonder woman');
// jla.clear();
// console.log(jla);

// // Converting Sets to Array
// const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
// console.log(shoppingSet);
// const shoppingArray = [...shoppingSet];
// console.log(shoppingArray);


// function yearAtMicrosoft(year){
    
//     console.log('I have Worked at Microsoft for ten years!');
//     console.log(2016 - year);
    
// }
// yearAtMicrosoft(2001);

// Functions
function greet(firstName, lastName, age){
    // console.log('Hello');
    return 'Hello' +  ' My name is '  + firstName + ' ' + lastName + 
    ' ' + "i'm" + ' ' + age + ' ' + 'years old';
    
};

function calculateYearOfBirth(age){
    return 2020 - age;
}
// console.log(greet('John', 'Smith', 34));
// console.log(calculateYearOfBirth(34));

// FUNCTION EXPRESSION
const multiply = function(x = 6){
    return x * 6;
};
console.log(multiply());
// IIFES
// (function(){
//     console.log('Ify ran...');
// })();

(function(name){
    console.log('Hello World' + ' my name is' + ' ' 
    + name + ' and i will love to change the World.');
})('Victoria');

// Property Methods
const todo ={
    add: function(){
        console.log('Add to do list')
    }, 
    edit: function(id){
        console.log(`Edit to do list Number ${id}`)
    }
}
todo.add();
todo.edit(22);