// if (something){
//     do it
// }else{
//     (do something else)
// }

const id = 100;

// // Equal to Operator
// if(id == 100){
//     console.log('Correct');
// }else{
//     console.log('Your answer is incorrect');
// }

// // Not Equal to Operator
// if(id != 101){
//     console.log('Correct');
// }else{
//     console.log('Your answer is incorrect');
// }

// // Equal to Value and Type
// if(id === 100){
//     console.log('Correct');
// }else{
//     console.log('Your answer is not correct');
// }

// // Equal to Value and Type
// if(id !== 100){
//     console.log('Correct');
// }else{
//     console.log('Your answer is not correct');
// }

// // Test if Undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID number is ${id}`);
// }else{
//     console.log('You do not have an Id number');
// }

// Greater Than or Less Than
// if(id >= 200){
//     console.log('Correct');
// } else{
//     console.log('Incorrect'); 
// }
// // Less than
// if(id <= 200){
//     console.log('Correct');
// } else{
//     console.log('Incorrect'); 
// }

// If Else
const car = 'Venza';
const color = 'White'

if (car === 'Corrolla' && color === 'green'){
    console.log('i drive a toyota Corrolla and color is green');
}else if(car === 'Venza' && color ==='White'){
    console.log(`I just got my ${car} and color is ${color} `);
}else{
    console.log('You did not get the both answer');
}

// Logical Operator
const name = 'Victoria';
const school = 'University of Lagos';
const Course = 'History Strategic Studies';
const yearOfStudy = 4;
// AND OPERATOR
if(school === 'illorin' && Course === 'HSS' && yearOfStudy == 4 ){
    console.log('The answer is incorrect');
}else if(school ==='University of Lagos' && Course ==='Hss'
&& yearOfStudy === 4 ){
    console.log('The first part is correct but the rest is not');
} else{
    console.log(`my name is ${name} and i was a student of 
    ${school} in the department of, ${Course} and year of study
    was, ${yearOfStudy} years.`);
}

const books = 'Moment of Lift';
const Num = 40;

if(Num >= 0 && Num <= 1){
    console.log(`The book ${books} is ${Num} copies`);
}else if(Num <= 4 && Num >= 12){
    console.log(`Its expected that the book ${books} 
    should be ${Num}`);
}else{
    console.log(`There is need for an evaluation on how many 
   ${books} was printed. `)
}

// OR || Operator
if (Num <= 10 || Num >= 20){
    console.log(`The book ${books} has been completed, its now
    ${Num} copies.`);
}else{
    console.log('There is need to complete the books.')

}

// Ternary Operators
// The Tenary Operator is a Question Mark ?
console.log(id === 100 ? 'CORRECT': 'INCORRECT');

// Switches
const Color = 'blue';

switch(Color){
    case 'red':
        console.log('Color is not red');
        break;
    case 'blue':
        console.log('The Color is Blue');
        break;
    default:
        console.log('Niether of the bothis correct');
} 

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day ='Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day ='Wednesday';
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
console.log(`Today is ${day}` );
