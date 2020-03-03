// // Global Scope

var a = 1;
let b = 5;
const c = 6;

// function test(){
//     var a = 2;
//     let b = 8;
//     const c = 10;
//     console.log('Function Scope:', a, b, c);


// }
// test();              

// Block Scope
// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);


// }zzzz

for(let b = 0; b < 10; b++){
    console.log(`Loop: ${b}`);

}

console.log('Global Scope: ', a, b, c);


