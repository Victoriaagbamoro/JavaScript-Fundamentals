
//Console

// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log ([1,2,3,4]); // Array
// console.log( {a: 1,  b: 2}); // Objects
// console.table({c:1, D:2}); //Table
// console.error('This is some error'); //Error
// console.clear()
// console.warn('Warn');
// console.time('Hello');
// console.timeEnd('Hello')

// Var, let, const

// var name = 'love';
// console.log(name);

// var greeting = 'Morning';
// console.log(greeting);

// var number = 2 + 4;
// console.log(number);

// // int variable

// var love = 'Good';
// console.log(love);
// love = 'Good';
// console.log(love);
// number = 3 + 4;
// console.log(number);

// // A variable cannot start with a Number
// // Inside a variable there includes numbers, letters, Underscore and dollar

// // Multi words variable
// var firstname = 'Victoria';   
// var first_name = 'Sam';
// var First_name = 'Love'

// Variable and Let work Interchangebily. They are almost the same.
// LET

// let name = 'love';
// console.log(name);
// var greeting = 'Morning';
// console.log(greeting);

// let grace;
// grace = 'The Lord is with me';
// console.log(grace);

// CONST
//  Const stands for constant, what that means is that it can not change
// or be reassigned.
// We have to assign a Value

// const name ='Becky';
// console.log(name);
// // cannot reassign
// const love = 'becky'
// console.log(love);
// // const is always constant
// // its important that const be assigned to a value, if not it will return error

// const person = {
//     name:'Sam',
//     age: 30
// }

// person.name = 'sara';
// person.age = 30;
// console.log(person);

// const patience ={
//     name: 'Paul',
//     age: 40
// }
// console.log(patience);

// //  However in Console the values cannot be reassigned.

// const numbers =[ 1, 2, 3, 4];
// numbers.push(6);
// console.log(numbers);


// PRIMITIVE DATA TYPES

// STRINGS

// const name = 'John Doe';
// // NUMBER

// const age = 45;
// // BOOLEAN
// const haskids = true;
// // Booleans do not have quotes around them.

// // NULL
// const car = null;

// // UNDEFINED
// let test;
// // SYMBOL
// const sym = Symbol();

// // REFERENCE TYPES

// // Array
// const hobbies = ['movies', 'music',];
// // Object Literal
// const address = {
//     city: 'New York',
//     state: 'Nigeria'

// }
// const today = new Date();
// console.log(today)



// console.log(typeof today);



// TYPE CONVERSION

// let val;


// // Number String
// val = String(555);
// val = String(4+4);
// // Lets Convert a Boolean to a String
// val = String(true);
// // Dat to String
// val = String(new Date())
// // Array
// val = String([1, 2, 3, 4, 5]);
// // tostring
// val = (5).toString();
// val =(true).toString()
// // Turning String to Numbers
// val = Number('5');
// val = Number (true);
// val= Number (false);
// val = Number(null);
// // parsefloat
// val = parseFloat('200.30');
// val = parseInt('200.30');




// // Output
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed())

// const val1  = 5;
// const val2  = 6;
// const sum =(val1 + val2);
// console.log(val1 + val2);

// Numbers and Math Object
// const num1 = 100;
// const num2 =50;
// let val;

// // Simple val with numbers

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.5);
// val = Math.sqrt(64);
// val =Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 1, 55, 6, 3 -2)
// val = Math.max(2, 33, 1, 55, 6, 3 -2)
// val = Math.random()

// val = Math.floor(Math.random() * 20 + 1)
// console.log(val);

// String and Concatenation
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36
// let val
// val = firstName + lastName;


// // concatenation
// val = firstName + '' + lastName;

// // Apend
// val = 'Brad  '
// val +='Travesy'

// val = 'Hello, my name is ' + firstName + ' and i am '+ age +  ' years'; 

// // Escaping
// val = 'Our ' + 'live\'s ' + 'is for the glory of God '

// val = firstName.length

// // Concat()
// val = firstName.concat(' ' + lastName)

// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[1];

// // indexOf()
// val = firstName.indexOf('4');
// val = firstName.lastIndexOf('1');

// // charAt()
// val = firstName.charAt('2');
// // Get Last Character
// val = firstName.charAt(firstName.length -1);
// // Substring
// val = firstName.substring(0, 4);

// console.log(val);

// // TEMPLATE LITERALS
// const name = 'Victoria';
// const age = 30;
// const job = 'Developer';
// const city = 'Miami';
// let html;

// // Without Template Strings(es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + 
//         '</li><li>City: ' + city + '</li></ul>';
// html = '<ul>' + 
//         '<li>Name: ' + name + '</li>' +
//         '<li>age: ' + age + '</li>' +
//         '<li>job: ' + job + '</li>' +
//         '<li>city: ' + city+ '</li>' +
//         '</ul>';

//         function hello(){
//             return 'hello';
//         }
// // With Template Strings (es5)
// html = `
//         <ul>
//             <li>Name: ${name}</li>
//             <li>age:${age}</li>
//             <li>job:${job}</li>
//             <li>city:${city}</li>
//             <li>${2 + 2}</li>
//             <li>${3 + 4}</li>
//             <li>${5 + 6}</li>
//             <li>${hello()}</li>

    
//         </ul>
//     `;





// document.body.innerHTML = html;


// Class-Work

// const name = 'Base-fare';
// const subject = 'Fuel-surcharge';
// const object = 'Airport-tax';
// const tax = 'Base-fare + Fuel-surcharge * 0.5%';
// const tsc = 'Ticket sale charge';
// let html;

// html = `
//         <ul>
//             <li>name: ${name}</li>
//             <li>subject:${subject}</li>
//             <li>object:${object}</li>
//             <li>tax:${tax}</li>
//             <li>tsc:${tsc}</li>
            
        
        
//         </ul>

// `;


// document.body.innerHTML = html;

// const num = [1 + 2 + 3 + 4 + 5];

// let val;
// console.log(num)

// const base_fare = 15000;
// const fuel_surcharge = 30000;
// const airport_tax = 18000;


// console.log = (base_fare + fuel_surcharge + airport_tax);


// Template Literals

// const name = `Siri`;
// `Hello ${name}!`;

// // Create Some Arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array (22, 24, 33, 76, 54);
// const fruits = ['Apple', 'Bananna', 'Lemon', 'Orange'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// console.log(mixed);

// let val;

// // Get array Length
// val = numbers.length;
// // Check if  is Array
// val = Array.isArray(fruits);
// // Get a single value from an Array
// val = numbers[0];
// val = fruits[2];
// // Insert into Array
// numbers[1] = 200;
// fruits[2] = 'Waterlemon';
// fruits[4] = 'Water';

// // Find Indexof value
// val = numbers.indexOf(36);

// console.log(numbers);
// console.log(val);
// console.log(fruits);


// ARRAYS
// Arrays are mutable and you can modify them.

// VAR
// var name = 'John Doe';
// console.log(name);
// name = 'Steven Smith';
// console.log(name);

// // Initailise Variable
// var greeting;
// console.log(greeting);
// greeting = 'Good Morning';
// console.log(greeting);

// // LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steven Smith';
// console.log(name);

// // CONST
// const name = 'John';
// console.log(name);
// // Const cannot be re-assigned
// // name = 'sara';

// const Person={
//     name: 'Victoria',
//     age: 22,
// }
// console.log(Person);
// Person.name ='Sara';
// Person.age = 26;
// console.log(Person);

// ClassWork
// // Assign a var to various fruits
// var fruit;
// fruit = 'banana';
// console.log(fruit);
// var fruit ={
//     fruit1: 'Banana',
//     fruit2: 'Blueberry',
//     fruit3: 'Avocado',
//     fruit4: 'Pineapple',
//     fruit5: 'Lettuce',
// }
// console.log(fruit);
// fruit.fruit2 = 'Cumcumber';
// console.log(fruit);

// let name;
// name = 'Victoria';
// console.log(name);
// name = 'Sarah';
// console.log(name);

// const Company = 'Microsoft';
// console.log(Company);
// const person ={
//     name: 'Amaka',
//     lastName: 'Agbamoro',
//     company: 'Google',
//     yearAtCompany: 6,
// }
// person.lastName = 'Grace';
// console.log(person);

// DATA STRUCTURES
// PRIMITIVE

// // String a sequence of Character
// const name = 'John Biden';
// console.log(typeof name);
// // Number 
// const age = 22;
// console.log(age);
// // Boolean
// const hasKids = true;
// console.log(typeof true);
// // Null
// const car = null;
// console.log(typeof car);
// // Undefined
// let test;
// console.log(test);
// // Symbol is new to the primitive data type
// const sym = Symbol();
// console.log(typeof sym);

// // REFERNCE TYPES: Objects
// // Arrays
// const num = [1,2,3,4,5,6];
// console.log(typeof num);
// // Object Literal
// const address = {
//     city: 'Ikeja',
//     state: 'Lagos'
// }
// console.log(typeof address);
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Type Conversion
// let val;

// // Number to string
// val = String(5);
// val = String(4 + 4);
// val = String(6 + 4);
// // Boolean to a String
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to String
// val = String([1,2,3,4,5]);
// // toString
// val = (5).toString();
// val=(true).toString();
// // String to Number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val= Number(null);
// val = Number('Hello');
// val = Number([1,2,3,4,5]);

// // parseInt - It will only pass the Number as an Integer.
// val = parseInt('100.30');
// val = parseFloat('100.30');
  


// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length); length only works with Strings
// console.log(val.toFixed());

// // Type Coercion
// const val1 = String(7);
// const val2 = 8;
// const sum = val1 + val2
// console.log(sum);
// console.log(typeof sum);
// const obj1 = String(88);
// const obj2 = 78;
// const Sum = obj1 + obj2
// console.log(Sum);

// var x = 10;
// var y = 'abc';

// var a = x;
// var b = y;
// console.log(x,y,a,b);

// var reference =[1];
// var refCopy = reference;
// reference.push(2);
// console.log(reference, refCopy);

// var amount = 100;
// amount = amount * 2;
// console.log(amount);

// amount = "$" + String( amount );
// console.log(amount);

// var TAX_RATE = 0.08;

// var amount = 99.99;
// amount = amount * 2;

// amount = amount +(amount * TAX_RATE);
// console.log(amount);
// console.log(amount.toFixed(2));

// Numbers and Maths 
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math with Numbers
// val = num1 + num2;
// val = num1 + num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;
// val = num1 * num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);

// console.log(val);

// String Methods and Conatenation
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'Web Development,Programming,Web design';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append 
// val = 'Brad ';
// val += 'Traversy';
// val = 'Hello, my name is ' + firstName + ' '+ lastName + 
// ' and i am ' + age;

// // Escaping
// val = 'That\s awesome ' + firstName;

// // Length
// val = firstName.length;

// // Concat()
// val = firstName.concat(' ', lastName);

// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();
// val= lastName.toUpperCase();
// val= lastName.toLowerCase();

// // Indexof()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // CharAt()
// val = firstName.charAt('2');

// // Get last  Char
// val = firstName.charAt(firstName.length-1);

// // Substring
// val = firstName.substring(0, 4);
// val = firstName.substring(2, 4);

// // Slice
// val = firstName.slice(1, 5);

// // Split()
// val = str.split(' ');
// val = tags.split(',')

// // Replace
// val = str.replace('Brad', 'Jack');

// // Include
// val = str.includes('Hello');

// console.log(val);

// Template Literals
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//     </ul>

// `;

// // Arrays
// // Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// // Another way to create an Array.
// const numbers2= new Array(22,43,55,70);
// const fruit =['Apple', 'Lemon', 'Orange', 'Pear'];

// let val;

// // Get Array Length
// val = numbers.length;
// val = fruit.length;
// // Check if is an Array
// val = Array.isArray(numbers);
// // Get Single Value
// // Arrays are zero based.
// val = numbers[3];
// val = numbers[0];
// // Insert Into Array
// numbers[2] = 100;
// numbers[0] = 55;
// // Find the Index of a Value
// val = numbers.indexOf(55);

// // // MUTATING ARRAYS
// // // Add on to the end of an Array
// // numbers.push(45);
// // fruit.push('Avocado');
// // // Add on to the Front of an Array
// // numbers.unshift(250);
// // fruit.unshift('Banana');
// // // Taking off a value from the end of an Array
// // numbers.pop();
// // fruit.pop();
// // // Taking off a value from the front of an Array
// // numbers.shift()
// // // Splice()
// // numbers.splice(2,2);
// // fruit.splice(0,3);
// // // Reverse
// // numbers.reverse()

// // // Concatenate Arrays
// // val = numbers.concat(numbers2);

// // // Sorting Arrays
// // val = fruit.sort();
// // val = numbers.sort();

// // // Use the "Compare function"
// // val = numbers.sort(function(x,y){
// //     return x -y;
// // });

// // // Reverse Sort
// // val = numbers.sort(function(x,y){
// //     return y - x;
// // })

// // Find
// function Over50(num){
//     return num > 50;
// }

// val = numbers.find(Over50);

// console.log(numbers);
// console.log(fruit);
// console.log(val);

// ObjectLiteral
const person = {
    firstName: 'Victoria',
    lastName: 'Agbamoro',
    company: 'Google',
    age: 22,
    email:'agbamorovictoria@gmail.com',
    hobbies: ['music', 'sports', 'Juicy', 'coding'],
    address: '20, Ebiere Street',
    getBirthYear: function(){
        return 2020 - this.age;
    }

}

let val;

val = person; 
// Get a Specific Value
val = person.firstName;
// val = person['firstName'];
val = person.company;
val = person.lastName;
val = person.hobbies[1];
val = person.address;
val = person.getBirthYear();

console.log(val);

// Arrays of Object
const people = [
    {name: 'Victoria', age: 30},
    {name: 'Sam', age: 22},

]

console.log(people);
