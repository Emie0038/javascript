console.log("Hi")
//to declare a variable
let name = "Glo";
console.log(name);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//primative types/value types
let name1 = "Emie"; //String Literal
let age = 31; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

console.log(name1,age,isApproved,firstName,selectedColor)



//Dynamic Typed
function out(any) {console.log(any)}

const inpColor = document.querySelector(".getColor");
const pbSetColor = document.querySelector(".pbSetColor");


out(inpColor);
const bdy = document.querySelector("body");
out(bdy);

function changeBodyColor() {
  let col = inpColor.value;
  out(col);
  bdy.style.backgroundColor = col
}

pbSetColor.addEventListener('click', changeBodyColor);
