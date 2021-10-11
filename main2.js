let notasAcumuladas = 0
let cantidadNotas = parseInt(prompt("ingresa el numero de notas"))

for (let i = 0; i < cantidadNotas ; i++) {
    let nota = parseInt(prompt("ingrese nota"))
    notasAcumuladas += nota;

}

let promedio = notasAcumuladas/ cantidadNotas;

if (promedio <6){
    console.log ("estas desaprobado")
} else if ( promedio >=6 && promedio < 8) {
    console.log ("estas aprobado")
} else if ( promedio >= 8 && promedio < 10){
    console.log ("Promocionado")
} else {
    console.log ("estas aprobado")
}













































/*let deporteFavorito = prompt ("ingresa tu deporte favorito");

if (deporteFavorito == "voley") {
    alert ("Mi deporte favorito tambien es el voley");
} else if (deporteFavorito=="tenis") {
    alert("ese deporte no me gusta, me gusta el voley")
} else {
    alert("tu deporte favorito es el: "+deporteFavorito + "el mio es el voley")
}



let numero1 = 1;
let numeroUno ="1";

let numeros = (numero1 != numeroUno)
alert("la variable")*/