// var a = 75;
// var b = 56;
// var c = 'Test';
// console.log(a + b);
// console.log(a -b);
// // Converting Numbers to string
// // Inserting into Arrays
// // Create a string of Array
// // Reverse an Array
// // Create a value using the following
// // splice
// // Shift
// // Unshift
// // push
// // pop
// // Concantenate an Array
// // Sorting Arrays
// // Find function
// // Create an Object Literal of five different people, using function to find their birthyear
// // Create an Array of Objects

// // let val;
// // val = String(4);
// // val = String(8 + 8);
// // val = String(true);
// // val = String(new Date());
// // val = String(false);
// // // var d = 66;
// // // var k = 77;
// // // val = String( d + k);
// // val = Number('Fruit');
// // val = Number('5');
// // val = Number(false);
// // val = Number('Hello');


// // console.log(val);

// // Strings and Concatenation
// // const Company = 'Fruity Xpress';
// // const Location = 'Lagos,Island';
// // const Founded = 2020;
// // const menu = 'Friut Juice and Smoothie';

// // let val;

// // val = Company + Location + Founded + menu;
// // val = Company + ' is located at' + ' ' + Location + ' and was founded in ' + ''+ Founded + '.' + 
// // ' We make' + ' ' + menu;
// // val = Company.length;
// // val = Founded.length;
// // val = menu.length;
// // val = Company.substring(0, 2);
// // val = Company.slice(2,4);
// // console.log(val);

// let val;
// // Arrays with string
// const fruits = ['Apple', 'Orange', 'Kale', 'Cumcumber', 'Carrot'];
// const num = [44, 55, 66, 77, 88, 99, 100];
// const num2 = [22, 45, 67, 78, 200];

// val = fruits.length;
// val = num.length;


// // val = Array.isArray(fruits);
// // val = fruits[0];
// // val = fruits[3];
// // val = fruits[2];
// // val = num[4];

// val = num.push(34);
// val = num.push(50);
// val = num.push(87);
// val = fruits.push('Lemon');
// fruits[2] = 'Spinach';
// fruits[0] = 'Lettuce';
// // Reverse An Array
// fruits.reverse();
// num.reverse();

// // Splice
// // num.splice(2,3);

// // Shift
// // num.shift(1);

// // Unshift(adds to the front)
// num.unshift(37);
// num.unshift(89);
// num.push(29);
// num.pop();
// num.sort();

// fruits.unshift('Banana');
// fruits.unshift('Mango');
// fruits.push('Lime');
// fruits.pop();
// fruits.sort();

// // Concatenate an Array

// val = num.concat(num2);
// val = num.concat(fruits);
// val = fruits.concat(num);
// num.length;




// console.log(val);
// console.log(num);
// console.log(num2);
// console.log(fruits);

// // Create an Object Literal

// const person ={
//     firstName: 'Agbamoro',
//     secondName: 'Amaka',
//     company: 'Google',
//     hobbies: ['Music', 'Juicing', 'Children', 'coding'],
//     age: 22,
//     address:{
//         state: 'Nigeria',
//         city: 'Lagos',
//     },
//     getBirthYear: function(){
//         return 2020 - this.age;
//     }

// }


// console.log(person.company);

// const Amara ={
//     firstName: 'Amarachi',
//     secondName: 'Jonas',
//     company: 'Microsoft',
//     hobbies: ['Music', 'Juicing', 'Children', 'Coding'],
//     age: 25,
//     address:{
//         state: 'Los Angeles',
//         city: 'California',
//     },
//     getBirthYear: function(){
//         return 2020 - this.age;
//     }
// }

// console.log(Amara.getBirthYear());

// const Jane ={
//     firstName: 'Jane',
//     secondName: 'Mattew',
//     company: 'Delloitte',
//     hobbies: ['Jumping', 'speaking', 'writing', 'coding'],
//     age: 21,
//     address:{
//         state: 'Canada',
//         city: 'Montreal',
//     },
//     getBirthYear: function(){
//         return 2020 - this.age;

//     }
// }

// console.log(Jane);

// const Paul ={
//     name: 'Paul Adeniran',
//     school: 'University of Lagos',
//     Grade: 'First Class Upper',
//     hobbies: ['eating', 'juicing', 'reading', 'talking'],
//     age: 2001,
//     country: 'Nigeria',
//     getAge: function(){
//         return  2020 - this.age;
//     }
// }

// console.log(Paul.getAge());

// const Issy ={
//     name: 'Isioma Andrew',
//     college: 'University of Lagos',
//     courseOfStudy: 'Computer Science',
//     yearOfEntry: 2013,
//     yearsOfCourse: '5 years',
//     graduateYear: 2018,
//     age: 1997,
//     country: 'Nigeria',
//     passion: 'Changing lives',
//     numYearOfStudy: function(){
//         return this.yearOfEntry - this.graduateYear;
//     },
//     getCurrentAge: function(){
//         return 2020 - this.age;
//     }

// }

// console.log(Issy.numYearOfStudy());
// console.log(Issy.getCurrentAge());

// // Create An Array OF objects
// const dep=[
//     {name: 'History and Strategic Studies', 
//     yearOfCourse: 'Four years' },
//     {name: 'Computer Science', yearOfCourse: 'Five years'},
//     {name: 'Agriculture', yearOfCourse: 'Four years'},
//     {name: 'Law', yearOfCourse: 'Five years'},
    
// ];

// console.log(dep);

// var students = ['Matt', 'Victoria', 'Tunde'];

// while(students.length > 0){
//     let student = students.pop();
//     console.log(`Hello, ${student}`)
// }

// function calculateStudentAge(age){
//     return age - 2020;
// }

// calculateStudentAge(34);

// function timeRemaining(timeElasped,endTime){
//     return timeElasped - endTime;
// }

// timeRemaining(42, 140);

// function addFavoriteBook(bookName){
//     if(!bookName.includes('Great'));
//     favoriteBooks.push(bookName);
// }

// function printFavoriteBooks(){
//     console.log(`FavoriteBooks: ${favoriteBooks.length}`);
//     for(let i = 0; i > favoriteBooks.length; i++){
//         console.log(favoriteBooks);
//     // for(let bookName of favoriteBooks){
//     //     console.log(favoriteBooks);
//      }
    
// }

// var favoriteBooks = []

// addFavoriteBook('You don/t know Js'); 
// addFavoriteBook('Moment of Lift');
// addFavoriteBook('The Great Gatbsy');
// addFavoriteBook('Great God'); 
// addFavoriteBook('Little Women');
// addFavoriteBook('Power of your Mind');

// printFavoriteBooks();

functon person(){
    name: 
    school: 
    age:
    favoriteBooks:
    
}

function addFavoriteBook(bookName, name, school, age){
    if(!bookName.includes('Great')){
    console.log(bookName)
    favoriteBooks.push(bookName);
    };
}

function printFavoriteBooks(){
    console.log(`favoriteBooks: ${favoriteBooks.length}`);
    // for(let i = 0 ; i < favoriteBooks.length; i++){
    //     console.log(favoriteBooks);
    for(let bookName of favoriteBooks){
        console.log(bookName);
        }
    
}

var favoriteBooks = []

addFavoriteBook('Little Women', 'Victoria', 
'University of Lagos', 22);
addFavoriteBook('Graced', 'Mark', 'University of Lagos',
25);
addFavoriteBook('Moment of Lift', 'Jane', 'University of Benin', 
26);
addFavoriteBook('Down the road', 'Amara', 'University of Lagos', 
23);
addFavoriteBook('Educated', 'Tara', 'MIT', 30);
addFavoriteBook('Great Gatbsy', 'Emmy', 'University of Jos');

printFavoriteBooks();
console.log(favoriteBooks);