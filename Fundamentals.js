// var person={
//     name: 'Agbamoro',
//     lastName: 'Victoria',
//     age: 15,
//     getFullName: function(){
//         return this.lastName + ' ' + this.name;
//     }
// };
// console.log(person.getFullName());
// var personOne = person.name;
// personOne = person.lastName;
// console.log(personOne);

// // Type Conversion

// var f = 100;
// console.log('The variable f was assigned a value of:' + '' + f);

// var h = "5";
// h = Number(h);
// var i = 8
// console.log(h + i );

// var name = prompt('Enter your personal details');
// alert('Hello' + ' ' + name);

// var calculateAge = prompt('Whats your age');
// alert('Hello' + ' ' + "i'm"  + ' ' + calculateAge + ' ' + 'years');


// var number = Number(prompt('Enter a Number'));
//     if(number < 0){
//         console.log(number + ' is a negative one');
//     } else if(number > 0){
//         console.log(number + ' is a positive number')
//     }else{
//         console.log('non meets the parameters');
//     }

    
//     if((number >= 0) && (number <= 100)){
//         console.log(number + ' is set to go above zero and 100');
//     }


// var weather = prompt('what is the weather like.');
// if (weather === 'sunny'){
//     console.log('its T-shirt time');
// }else if(weather ==='windy'){
//     console.log('One of my best seasons');
// }else if(weather === 'rainy'){
//     console.log('Carry Umbrella with you.');
// }else if(weather ==='snowy'){
//     console.log('Just stay inside!')
// }else{
//     console.log('Not a Valid weather type');
// }

// var company = prompt('Where do you work?');
// switch (company){
//     case 'Google':
//         console.log('I will work here someday in sowatto, USA.');
//         break;
//     case 'Microsoft':
//         console.log('You are in one of the best Companies in the World');
//         break;
//     case 'IBM':
//         console.log('A great place to build your career');
//         break;
//     case 'Delliote':
//         console.log('A great Financial Company');
//         break;
//     default:
//         console.log('The cateria is that you must work in a tech firm');


// }

// var calculatorNum = prompt(8 + 10);
// switch(calculatorNum){
//     case 2 + 4:
//         console.log('Thats the correct answer');
//         break;
//     case 8 + 10:
//         console.log(calculatorNum);
//         break;
//     default:
//         console.log('Non of this is correct');
// }




// color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// console.log("The man whispered, \"please speak to me.\"");

// let step = prompt('How many steps are you walking east ward');

// for (let step = 0; step < 5; step++){
//     if(step < 4){
//         console.log('walk another size of the road');
//     }else{
//         console.log('Dont walk either size');
//     }
// }


const Mercedes = 1500000;
const Corolla = 4000000;
const Kia = 5000000;
const LandRover = 1000000;
const accessories = 500000;

amount = 0;
AmountOfCar = 12000000;
AccountBalance = 20000000;

function getAmountOfFavoriteCar(amount){
    return amount + Mercedes;
}

console.log(getAmountOfFavoriteCar(amount));


amount = getAmountOfFavoriteCar();

while(getAmountOfFavoriteCar() <= 2000000){
    console.log(`Go further to buy + ${Corolla}`);
    getAmountOfFavoriteCar()++;
}


// var letter = "";
// while (letter !== "X") {
//     letter = prompt("Type any letter or X to exit:");
//     console.log(letter);
// }

// var x = Number (prompt("Enter a value:"));
// var result = x * 3 - 1;
// result += 5;
// console.log(result);

// var x = Number (prompt("Enter a value:"));
 
// if (x <= 10) {
//    if (x >= 5) {
//        console.log ( "A");
//    }
//    console.log("B");
// } else {
//    console.log("C");
// }

// var num1 = Number (prompt("Enter the number 1:"));
// var num2 = Number (prompt("Enter the number 2:"));
 
// if ((num1 < 0) != (num2 < 0)) {
//    console.log("At least one of the two numbers is negative");
// } else {
//    console.log("The two numbers are positive or zero");
// }


// var i = 0;
// while (i <= 4) {
//    console.log ( "Hey there!");
//    i++;
// }


// var numOne = Number(prompt('Enter a Valid number:'));
// var numTwo = Number(prompt('Enter a Valid number'));

// numOne = 25;
// numTwo = 45;

// if(numOne <= 25){
//     console.log('The number inputed is a valid integer number');
// }else if(numTwo <= 45){
//     console.log('You have exceeded the regular number');
// }else{
//     console.log('Input the right valid number');
// }

// var signNumOne = 8;
// var signNumTwo = -12;
// var signNumThree = 14;

// if(signNumOne = Number(signNumOne)){
//     alert(`The sign is a Number- ${signNumOne}`);
//     if(signNumTwo = signNumTwo ){
//         alert(`The sign ${signNumTwo} has an Operator in front of it`);
//     }
//     if(signNumThree = Number(signNumThree)){
//         alert(`The sign is a Number`);
//     }else{
//         alert('The sign is not a Number');
//     }
// }

// var sortNumbers = [0,-1,4];
// sortNumbers.reverse();

// alert(sortNumbers);
// function sayHello(name, lastName){
//     console.log('Hello ' + 'my ' + 'is ' + ' ' + name + ' ' + lastName);
// }

// console.log('start of program')
// sayHello('Victoria', 'Agbamoro');
// sayHello('Victoria', 'Agbamoro');
// console.log('end of program')

// var strOne = 'Victoria';

// for(i = 1; i<= strOne.length; i++){
//     console.log(`Every odd ${i}`);
// }


var films = ["Jurassic Park", "Titanic", "Toy Story", 'game Night'];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

const obj = {
    id:1,
    name: "gowtham",
    active: true
 }
 
 for (let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log(`${key} : ${obj[key]}`)
    }
 }