// FUNCTION DECLARATION

function greet(firstName, lastName){
    // console.log('Hello');
    return ' Hello '  + firstName + ' ' + lastName;
}

// console.log(greet('John', 'Doe'));



function photography(firstName = 'Victoria', lastName = 'Agbamoro'){
    return  firstName +' ' +  lastName +  ' will change the world with her prints ' 

}

// console.log(photography());

// FUNCTION EXPRESSION

const square = function(x = 3){
    return x*x;
};

// console.log(square());


const baseFare = function(ifare = 100, surcharge = 50, airportax = 18000){
    return ifare + surcharge + airportax / 50;

};

console.log(baseFare());


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS

// (function(){
//     console.log('IIFE ran..');
// })();

(function(name){
    console.log(' Hello ' + name );
})('Brad');

(function(saviour){
    console.log(' Who is king, ' + saviour);
})('Jesus');


// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)

    }
}

todo.delete = function(){
    console.log('Delete todo...');
}


todo.add();
todo.edit(22);
todo.delete();