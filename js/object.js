let person = {
  name: "John",
    age: 24
};
console.log(person);

//Dot notation when changing the name
person.name = 'Peter';
console.log(person.name);
//Bracket Notation
let selection = 'name';
person[selection] = 'Maria';
console.log(person.name);


//Array

let selectedColors = ['green', 'yellow', 'blue'];
console.log(selectedColors[1]);
selectedColors[3] = 'grey';
console.log(selectedColors);
console.log(selectedColors.length);

//Functions
function greet(name, lastName){
  console.log("Hi " + name+ ' '+ lastName);
}
greet('Java', 'Script');
greet('John');

//calculating a value

function square(number){
  return number * number;
}
console.log(square(2));
