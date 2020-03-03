// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else{
//     console.log(firstName + ' will hopefully marry soon');
// }

// var iAm = 'Victoria';
// var believe = 'God';

// if(believe === 'Victoria'){
//     console.log(believe + ' dares believe God!');
// } else{
//     console.log(iAm + ' dare believes in the ' + believe);
// }

// var isMarried = true;
// if(isMarried === true){
//     console.log(firstName + ' is married!');
// } else{
//     console.log(firstName + ' will hopefully marry soon');
// }

// var markMath = 58;
// var samMath = 90;

// if (markMath > samMath){
//     console.log('Mark\'s math is greater than Sam\'s');
// } else{
//     console.log('Mark\'s math is not greater than Sam.');
// }


// Bolean Logic

// var firstName = 'John';
// var age = 20;

// if (age < 16){
//     console.log(firstName + ' is a boy ');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if(age >= 20 && age < 30){
//     console.log(firstName + ' is a Young Man');
// }else {
//     console.log(firstName + ' is a man.');
// }

// const beans = 4;
// const rice = 7;

// if (beans > rice){
//     console.log('Seven rice of cups cannot be greater than four cups of beans');
// } else if(beans <= 7  && beans < rice){
//     console.log('Four beans cup is not greater than seven rice cups');
// } else{
//     console.log('Seven cups is greater than four cups');
// }

// The Ternary Operator and Switch Statements

// var firstName = 'John'
// var age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.'):
// console.log(firstName + ' drinks juice. ');

// const Name = 'Victoria';
// var age = 18;

// age <=18 ? console.log(Name + ' drinks beer. '):
// console.log(Name + ' drinks Juice ');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch Statement
// var job = 'teacher';
// switch(job){
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Libson');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }


// switch (true){
//     case age < 13:
//         console.log(firstName + ' is a boy ');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');   
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

// var company = 'Google';
// switch(company){
//     case 'Google':
//         console.log(firstName + ' works at ' + company);
//         break;
//     case 'Microsoft':
//         console.log(firstName + ' works at Microsoft');
//         break;
//     case 'business':
//         console.log(firstName + ' does is own business');
//         break;
//     default:
//         console.log(firstName + ' does niether of the two');
// }

// // Truthy and Falsy Values and Equality Operators
// // Falsy Values: Undefined, Null, 0 '', Nan
// // Truthy Values: Are Not Falsy Values
// // When a value is not defined its regarded as a falsy value
// // But when a variable is defined its regarded as a non-falsy value.

// var height;
// height = 23;

// if (height || height === 0){
//     console.log('variable is defined');
// } else{
//     console.log('variable has NOT been defined');
// }

// // Equality Operators
// if (height === '23') {
//     console.log('The == operator does type coercion!');
// }


// Coding Challenge

// const John = 20;
// const nightClub = 'sandals';

// if(John >= 18 && nightClub === 'shoes'){
//     console.log('John is an Adult, and can go to the Night Club');
// } else if (John <=18 && nightClub === 'shoes'){
//     console.log('John is not yet an Adult, and cannot go to the club!');
// } else if (John >=20 && nightClub != 'shoes'){
//     console.log('John is an Adult but cannot go to the club because of his shoes');
// } else{
//     console.log('John did not meet both parameters.');
// }

// const John = 20;
// const nightClub = 'shoes';

// if(John <= 10 || nightClub === '0'){
//     console.log('John is an Adult, and can go to the Night Club');
// } else if (John <=18 || nightClub === '0'){
//     console.log('John is not yet an Adult, and cannot go to the club!');
// } else if (John >=20 || nightClub != 'shoes'){
//     console.log('John is an Adult but can go to the club but has no shoes');
// } else{
//     console.log('John did not meet both parameters.');
// }

// const name = ['love', 'beauty', 'grace'];
// //  name[1] = 'Happy';
// //  name[0] = 'Awesome; 
// name.push('graceful');
// // name.includes('love');
// console.log(name.includes(1));

const scoreJohn = (89 + 120 + 103) / 3;
const scoreMike = (116 + 94 + 123 ) / 3;
const scoreMary = (97 + 134 + 105)/3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John wins the game with ' + scoreJohn +' points.');
} else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('John wins the game with ' + scoreMike + ' points.');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary wins the game with ' + scoreMary + ' points ');
} else {
    console.log('There is a draw');
}




// if (scoreJohn > scoreMike){
//     console.log('John\'s team wins with ' + scoreJohn + ' points ');
// } else if (scoreMike > scoreJohn){
//     console.log('Mike\'s team wins with ' + scoreMike + ' points ');
// } else {
//     console.log('There is a draw');
// }

// const teeth = 74;

// const promptForGuess = () => {
//   const guess = prompt('How many teeth do alligators have?');

//   if (guess <= 0) {
//     alert(`It's definitely above zero!`);
//     promptForGuess();
//   } else if (guess >= 1 && guess <= 39) {
//     alert(`Quite a bit higher than that!`);
//     promptForGuess();
//   } else if (guess >= 40 && guess <= 73) {
//     alert(`Getting closer. It's a little higher!`);
//     promptForGuess();
//   } else if (guess >= teeth && guess <= 80) {
//     alert(`Yup. That sounds about right.`);
//   } else {
//     alert(`Too many. Try lower than that.`);
//     promptForGuess();
//   }
// };

// promptForGuess();

// const humanHand = 10;

// const promptForGuess = () =>{
//     const guess = prompt ('How many hands do human have?');
//  if (guess <= 0){
//     alert(`It's definitely above zero`);
//     promptForGuess();
// }  else if (guess >= 5 && guess <= 10) {
//     alert(`Quite a bit higher than thant!`);
//     promptForGuess();
// } else if (guess >= 5 && guess <=5){
//     alert(`Getting closer. It's a little higher!`);
//     promptForGuess();
// }  else if (guess >= humanHand && guess <=10){
//     alert(`Yup. You are on the right track`);
// } else {
//     alert(`Thats a bit high, pick something lower`);
//     promptForGuess();
// }

// };

// promptForGuess();

const globalAge = 18;
const pronptGlobalAge = () =>{
    const globalAge = prompt ('You must be above 18 to use this app');
    if (globalAge <= 13){
        alert(`You are not eligible to use this app`);
        promptGlobalAge();
    } else if (globalAge >=25){
        alert(`You are too old to use this app`);
        promptGlobalAge();
    } else if (globalAge >=18){
        alert(`You are eligible to use this app`);
        promptGlobalAge();
    } else {
        alert(`You do not meet the parameters to use this page`);
        promptGlobalAge();
    }
};



