let notaAcumulada = 0;
let contador = 0;
                                                
do {
    var valor = parseInt(prompt("ingrese una nota"))
    if (valor <0 || valor >10 ){
        alert ("por favor ingresar un numero del 0 al 10")
    }
    notaAcumulada += valor;
    contador++;

    var sigo = prompt("Desea agregar mas notas")


} while ((valor >=0 && valor <=10) && (sigo == "si"))


let promedio = notaAcumulada/ contador;

if (promedio <6){
    console.log ("estas desaprobado")
} else if ( promedio >=6 && promedio < 8) {
    console.log ("estas aprobado")
} else if ( promedio >= 8 && promedio < 10){
    console.log ("Promocionado")
} else {
    console.log ("estas aprobado")
}
















































/* let ingresaNumero = parseInt(prompt("ingresa un numero"));

for (let i=1; i <=10; i++ ) {
    let resultado = ingresaNumero*1;
    console.log(ingresaNumero + "X" + i + "=" + resultado)
}
*/
/*
for (let i=1; i<10; i ++) {
    if (i % 2 ==0 ) {
        console.log (i+ " es par");

    } else {
        console.log ( i + " es impar")
    }
}

/*

for (let i = 1; i <=10; i++) {
    if (i== 3) {
        break;
    }
    console.log (i);
}


for (let i=1; i<= 10; i++){

    if (i==2){
        for (let j=2; j < 5; j++) {
            let resultado2= i * j;
            console.log ( i + "X" + j + "=" + resultado2);
        }
    }
    if (i==5) {
        continue;
    }
    console.log(i);
}*/
/*


let pass= 1234;
let dato = parseInt(prompt("ingrese contraseña"));
let intentos = 3;

while ((dato!= pass) && (intentos>0 )) {
    alert("contraseña errada")
    dato = parseInt(prompt("Te quedan " + intentos + "intentos. Ingrese contraseña"));
    intentos --;
}

*/
/*

let num = parseInt(prompt"ingrese un numero");
let operacion = prompt("que operacion deseas realizar");

switch (operacion) {
    case "X";
    for (let i=1;i <=10 ; i++ )
}
*/
