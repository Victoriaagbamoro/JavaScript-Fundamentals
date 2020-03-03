// // Global Scope

// let company = 'Google';
// // This is a Global scope because its not declared inside a Function, and it can be accessed in any other scope.


// function logGoogle(){
//     let Google = 'Africa';
//     console.log(company);
//     console.log(Google);

// }

// logGoogle();


// function logPerson(){
//     let Person = 'Amaka';
//     console.log(company);
    
// }

// logPerson();


//   function doSomething(){
//     let x = 1
//     console.log(x);
//     console.log(company);
    
// }
// doSomething();



// (function autorun(){
//     let x = 1;
//     function log(){
//       console.log(x);
//     };
    
//     function run(fn){
//       let x = 100;
//       fn();
//     }
    
//     run(log);//1
// })();



// // var locales = {
// //     europe: function() {          // The Europe continent's local scope
// //       var myFriend = "Monique";
  
//     //   var france = function() {   // The France country's local scope
//     //     var paris = function() {  // The Paris city's local scope
//     //       console.log(myFriend);
//     //     };
  
// //         paris();
// //       };
  
// //       france();
// //     }
// //   };
  
// //   locales.europe();


// //   var test = "I'm global";

// // function testScope() {
// //   var test = "I'm local";

// //   console.log (test);     
// // }

// // testScope();           // output: I'm local

// // console.log(test);     // output: I'm global

// let Lagos = 'Isolo'

// function iLive(){
//     let Lagos = 'Ajao';

//     console.log(Lagos);
// }

// iLive();
// console.log(Lagos);
// // However when a Global scope is declared with the same var as the Local scope the Local Var takes more precedence.



// // Global Scope    
// let Africa = 'Nigeria';                      

// // Local Scope
// function testLive(){
//     let Victoria = 'Lagos';
//     let Akinbaiye = 'Ikeja';
//     console.log(Akinbaiye);
//     console.log(Africa);
//     console.log(Victoria);

// }
// testLive();

// function iWork(){
//     let Victoria = 'Venture Garden Group';
//     console.log(Victoria);
//     console.log(Akinbaiye);
//     console.log(Africa);
    
// }
// iWork();



// Coverting Strings to Number

// const answer = + '5';
// console.log(answer);

// const word = '6' 
// console.log(word);

// string = (3);
// console.log(string);

// const man = {
//     Company: 'Mickneyson'
// }


// const person = {
//     firstName :'Steve',
//     lastName : 'Smith',
//     age: '36',
//     email: 'agbamorovictoria@gmail.com',
//     hobbies: ['singing', 'dancing', 'Photography'],

//     address: {
//         city: 'New York',
//         state: 'USA',
//     },
//     getbirthYear: function(){
//         return 2017 - this.age;
//     }

    
// }

// let val;

// val = person;
// // Get a Specific value
// // val = person.firstName;
// // val = person['lastName'];
// val = person.age;
// val = person.email;
// val = person.hobbies [2];
// val = person.address.city;
// val = person.address['city'];
// val = person.getbirthYear();
// console.log(val);

// const people = [
//     {name: 'love',  age: '46' },
//     {secondName:'peace', age: '34'},
// ]

// let val;
// val = people;
// val = people.name;
// console.log(people);

// let val;

// const today = new Date();
// let birthday = new Date('12-25-1997');
// birthday = new Date('December 25 1997');
// birthday = new Date('9/10/1997');



// val = today.getMonth();
// val = today.getFullYear();
// val = today.getDate();
// val = today.getDay();
// val = today.getHours();
// val = today.getMinutes();

// birthday.setFullYear('1997');
// birthday.setMonth('12');

// console.log(birthday);



// IF STATEMENT
// if(something){
//     do something
// } else{
//     do something else
// }

    const id = 100;

// // EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }


// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }


// //TEST IF UNDEFINED 
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else{
//     console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id >= 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// // ELSE IF
// const color = 'orange';
// if(color ==='red'){
//     console.log('color is red');
// } else if(color === 'blue'){
//     console.log('color is blue');
// }else if(color ==='yellow'){
//     console.log('color is yellow');
// } else{
//     console.log('Color is niether blue nor yellow and red');
// }


// LOGICAL OPERATOR

// const name = 'Steve';
// const age = 70;

// // AND &&
// if(age > 0 && age < 15){
//     console.log(`${name} is a child`);

// }else if(age >= 13 && age<=18){
//     console.log(`${name} is a teenager`);

// }else{
//     console.log(`${name} is an Adult`);
// }

// // OR ||

// if(age < 16 || age > 65){
//     console.log(`${name} can run in the race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// // TENARY OPERATORS  Represented by a question Mark ?
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT')


// Switches

const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
        default:
            console.log('Color is not red or blue');
            break;

    
}

const company = 'Google';

switch(company){
    case 'Google':
        console.log('I work at Google');
        break;
    case 'Microsoft':
        console.log('I work at Microsoft');
        break;
        default:
            console.log('I neither work at Google or Microsoft');
            break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;

}

console.log(`Today is ${day}`);


switch(new Date().getMonth()){
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'Feburary';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
        case 7:
        month = 'August';
        break;
        case 8:
        month = 'September';
        break;
        case 9:
        month = 'October';
        break;
        case 10:
        month = 'November';
        break;
        case 11:
        month = 'Decemeber';
        break;

}

console.log(`we are in the month of ${month}`);