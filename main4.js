const interes6 = x => x*1.30;
const interes12 = y => y*1.60;
const interes18 = z => z*1.90;


let cantidad = parseInt(prompt("ingresar cantidad a financiar"));
let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));

function financiacion (){
    if (cuotas<=6 && cuotas>1){
        console.log (interes6(cantidad));
    } else if (cuotas <=12 && cuotas >6) {
        console.log (interes12(cantidad));
    } else if (cuotas <=18 && cuotas >12){
        console.log (interes18(cantidad));
    } else {
        alert("Cantidad de cuotas no puede ser mayor a 18 o menor a 1 ")

    }
}
financiacion();







































/*
let nota= 80;

switch (ture){


}
*/



/*
function suma(num1, num2) {
    console.log (num1 + num2);

    let resultado = num1 + num2;
    if (resultado>100) {
        return resultado;
    } else {
        return(resultado + 1)
    }
}

suma (40, 20);


let numero1 = 50;
let numero2 = 30;
let numero3 = 75;
let numero4 = 46;
suma (numero1, numero2);
suma(numero3, numero4);
*/

/*
function ValorProducto (precio, descuento){
    let valorFinal = precio - (precio*descuento/100);
    console.log (valorFinal);
    return valorFinal;
}

//ValorProducto (100,10);//

function productoNuevo (){
    let precioLista = parseInt(prompt("Ingrese el precio lista"));
    let descuento = parseInt(prompt("ingrese el descuento"));
    console.log (ValorProducto( precioLista, descuento));
}

productoNuevo();

*/

/*
//constantes//

const suma = function (a,b) { return a + b};
console.log (suma(15,20));

//ya no es necesario usar "function" solo basta con flecha para simplificar//

const resta = (a,b) => a-b;
console.log (resta(20,5));

*/

/*
const suma = (a,b) => a+b;
const resta = (a,b) =>a-b; 

const iva = x => x*0.21;

let precioProducto = 500;
let precioDescuento =50;

console.log (resta(suma(precioProducto, iva(precioProducto)), precioDescuento));
*/

/*
//saber si un numero es primo//

let dato = parseInt(prompt("ingresa un numero"));

const primos = (num) =>{
let resultado;
let contador =0;
for (let i=1; i <= num; i++) {
    if (num % i ==0){
        contador++;
    }
} 
if (contador==2){
    resultado= true;
} else {
    resultado= flase;
}
return resultado;
}

console.log (primos(dato));

*/