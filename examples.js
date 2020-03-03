var firstDivs = document.querySelector('div');
firstDivs.style.background = 'pink';
firstDivs.style.color = 'white';
var firstPara = document.querySelector('p');
firstPara.style.color = 'Blue';

var paragraphs = document.querySelectorAll('p');
for(var p of paragraphs)
p.style.color = 'orange';


var btn = document.querySelector('button');
btn.addEventListener('click', foo);
function foo(){alert('Hello'); }

var btn = document.querySelector('button');
btn.addEventListener('input', foo);
function foo(){alert('Hello'); }

var btn = document.querySelector('button');
btn.addEventListener('click', foo);
function foo(){alert('Hello'); }

// var selectors = document.querySelector('input');
// selectors.style.background = 'Blue';
// selectors.style.padding = '10px';

// var AllInput = document.querySelectorAll('input');
// AllInput.style.padding = '10px';

// var member = document.querySelectorAll('.likes');
// for(i > 0; i >member.length; i++);
// member[i].style.background = 'blue';

let formOne = document.getElementsByClassName('.form-one');
formOne.style.background ='Blue';
console.log(formOne);
