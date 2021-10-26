
const interes6 = x => x*1.30;
const interes12 = y => y*1.60;
const interes18 = z => z*1.90;


let cantidad = parseInt(prompt("ingresar cantidad a financiar"));
let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));

function financiacion (){
    if (cuotas<=6 && cuotas>1){
        console.log ("La cantidad total a pagar es " + interes6(cantidad) + " tiene un interes del 30%");
    } else if (cuotas <=12 && cuotas >6) {
        console.log ("La cantidad total a pagar es " + interes12(cantidad)  + " tiene un interes del 60%");
    } else if (cuotas <=18 && cuotas >12){
        console.log ("La cantidad total a pagar es " + interes18(cantidad)  + " tiene un interes del 90%");
    } else {
        alert("Cantidad de cuotas no puede ser mayor a 18 o menor a 1 ")

    }
}
financiacion();

//agregando objetos//


class ventas {
    constructor(nombre, apellido , producto , stock) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.producto = producto;
        this.stock = stock;
    }

    comprar (cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
            console.log ( "compraste  " + cantidad + " quedan " + this.stock )
        } else  {
            console.log (" solo quedan" + this.stock + " en stock" )
        }

}
}
let nombre = prompt ("Nombre del Cliente");
let apellido = prompt ("Apellido del cliente");
let producto = prompt ("producto adquirido");
let stock = 100;

const venta1 = new ventas (nombre,  apellido , producto, stock);

venta1.comprar(prompt("ingresar cantidad"));



//agregando arrays// 


let lista = [nombre, apellido, producto,stock];



lista.push (prompt("Es cliente regular?"));


console.log (lista);


//ordenando// 

let precios = [manzana= 200, pera =100, banana = 50];

precios.sort ((a,b) => {
    if (a==b){
        return 0;
    }else if (a<b) {
        return -1;
    }else {
        return 1;
    }
});

console.log("los precios de los productos segun la marca son " + precios);





































/*
const numeros = [1,2,3,4,5];

let resultado1 = numeros[0] + numeros[3];

console.log (resultado1)
*/

/*
let lista =["texto1", "texto2", 1, 2, false, ["texto3", "texto4"], {nombre:"pepito", apellido : "lopez"}];

for (i=0; i< lista.length; i++) {
    console.log("el elemento en la posicion" + i + "es" + lista [i]);
    console.log(lista[i])
}
*/

/*
let superlista = ["manzana", "agua", "leche", "huevos", "jabon"];

console.log (superlista);
superlista.push ("yerba");
console.log (superlista);
superlista.push ("galletitas");
console.log (superlista);
let articuloNuevo = prompt("Que necesitas comprar");
superlista.push(articuloNuevo);
console.log ( superlista);

superlista.sort();
console.log (superlista);


console.log (superlista.join("-") );

*/
/*

class productos {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [];

const agregarProductos = () => {
    let nombreAgregado = prompt("Que producto es");
    let precioAgregado = parseFloat(prompt("cual es el precio?"));
    let producto = new productos ( nombreAgregado, precioAgregado);
    listaProductos.push(producto);
}

listaProductos.push (new productos("jamon", 50));
listaProductos.push (new productos("tomate", 150));
listaProductos.push (new productos("leche", 250));
listaProductos.push (new productos("agua", 70));
listaProductos.push (new productos("huevos", 300));
console.log(listaProductos);
/*

//for of= recorrer propiedades dentro del array//
for(const obj of listaProductos) {
    console.log(obj);
    console.log(obj.nombre);
}

//for in = recorrer propiedades de un obejto//


for(const obj of listaProductos) {
    console.log(obj);
    for(const prop in obj) {
        console.log(prop);
    }
}

//for each = //
listaProductos.forEach(producto) => {
    console.log(producto.precio);
}
*/

/*
let search = prompt("que queres buscar?");


let buscaUno = listaProductos.find(obj => obj.nombre ===  search);//me da solo el primer resultado//
console.log(buscaUno);
*/

/*
let search = prompt("que queres buscar?");


let buscaMuchos = listaProductos.filter(obj => obj.nombre ===  search); //me muestra todos los resultados//
console.log(buscaMuchos);

let buscaMuchos2 = listaProductos.filter(obj => obj.marca < 200);
console.log(buscaMuchos2);
*/