let val;

const today = new Date();
let birthday = new Date('12-25-1997');
birthday = new Date('December 12 1997');

val = today.getMonth();
val = today. getDate();
// This gives us a numerical representation of get day 
val = today.getDay(); 
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(10);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(40);
birthday.setSeconds(25);

console.log(val);
console.log(birthday);