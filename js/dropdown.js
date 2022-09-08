const out = (any) =>{console.log(any)}
out("and")

const fruits = document.getElementById("fruits");

const fruitsArray =["banana", "mango", "guava"]

function fillDropdown(item, index){
  const element = document.createElement("option")
  element.textContent = index + " " + item;
  element.value = index;
  fruits.appendChild(element);
}


function btnPressed(){
  fruitsArray.forEach(fillDropdown);
}

const fill = document.getElementById("btnDropDown");

fill.addEventListener("click", btnPressed )
