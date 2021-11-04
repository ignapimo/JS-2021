// por ID

console.log(document.getElementById("unico"));

// por class

document.log(document.getElementsByClassName("parrafo"));


//por etiqueta

console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByTagName("p")[2]);

document.getElementsByTagName("p")[2].textContent = " A este parrafo le cambio el contendido desde js";

// por selector- queryselector- me va a traer siempre uno solo, el primer elemento

console.log(document.querySelector("p"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".parrafo"));

console.log(document.querySelectorAll("#unico"));






