const message = "Hello! World";
const element = document.getElementById("text");
const num = 1;

let index = 0;




function type(i) {
  if (index < message.length) {
    element.textContent += message[index];
    index++;
    setTimeout(type, 100); 
  }
}

type()