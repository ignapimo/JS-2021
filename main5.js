
const interes6 = x => x*1.30;
const interes12 = y => y*1.60;
const interes18 = z => z*1.90;


let cantidad = parseInt(prompt("ingresar cantidad a financiar"));
let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));

function financiacion (){
    if (cuotas<=6 && cuotas>1){
        console.log ("La cantidad total a pagar es " + interes6(cantidad));
    } else if (cuotas <=12 && cuotas >6) {
        console.log ("La cantidad total a pagar es " + interes12(cantidad));
    } else if (cuotas <=18 && cuotas >12){
        console.log ("La cantidad total a pagar es " + interes18(cantidad));
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

console.log (venta1);

































































//mascotas//

/*

const mascota1 = {
    //propiedad : "valor", ////siempre los organiza alfabeticamente//
    nombre : "lucky",
    tipo : "perro",
    dueño: {
        nombre: "juan",
        altura: "1.8m",
        direccion: "cabildo 123",
    },
    edad : 2,
    castrado: "Si",

}

console.log(mascota1);

//forma antigua//
console.log (mascota1["tipo"]);
//forma actual//
console.log (mascota1.dueño);

console.log (mascota1.dueño.direccion);

*/
/*


//los parametros entre parentesis son los datos que traigo de aufera de la funcion//
function mascotas (nombre,tipo,dueño,edad,castrado) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.dueño = dueño;
    this.edad = edad;
    this.castrado= castrado; //despues del this no tiene que ser mismo nombre del parametro//
    this.bio = () => {
        console.log ("esta mascota se llama " + this.nombre + " y tiene " + this.edad + " años");
    }

}

const simba = new mascotas ("simba", "gato","yael" ,5, true);
const mila = new mascotas ("mila", "perro", "ignacio", 1, true);

console.log (simba);
console.log (mila);

console.log (mila.bio());
console.log(simba.bio());
*/
/*
const crearMascota = () => {

let nombreMascota = prompt ("ingresa el nombre de tu mascota");
let tipoMascota = prompt ("que tipo de mascota es");
let nombreDueño = prompt ("como te llamas");
let edadMascota = Number (prompt ("Que edad tiene?"));
let estaCastrado = prompt ("Esta castrado?");

const mascota2 = new mascotas (nombreMascota, tipoMascota, nombreDueño, edadMascota,estaCastrado);
console.log(mascota2);

}
*/

/*

class mascotas {
    constructor(nombre, tipo, dueño, edad, castrado, acumlado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.dueño = dueño;
        this.edad = edad;
        this.castrado = castrado; //despues del this no tiene que ser mismo nombre del parametro//
        this.acumlado= acumlado;
    }
    
    bio = () => {
            console.log("esta mascota se llama " + this.nombre + " y tiene " + this.edad + " años");
    };
    puntos = (valor) => {
        let puntaje = valor * 3;
        this.acumlado += puntaje;
        console.log("ganaste " + puntaje + "  puntos . Acumulaste  " + this.acumlado);
    }
}

const simba = new mascotas ("simba", "gato","yael" ,5, true,0);
const mila = new mascotas ("mila", "perro", "ignacio", 1, true,0);

console.log (simba);
console.log (mila);

console.log (mila.bio());
console.log(simba.bio());
*/
/*
class productos  {
    constructor(nombre, categoria, precio, descuento , stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.descuento = descuento;
        this.stock = stock; 
    }

  calcularDescuento (){
      if (this.precio >1000){
          this.precio = this.precio*0.9;
          console.log(this.precio);
      } else {
          this.precio = this.precio* 0.95;
          console-log(this.productos)
      } 
    }

    comprar (cantidad) {
        if (this.stock > cantidad) {
            this.stock = this.stock - cantidad;
            console.log ( "compraste  " + cantidad + " quedan " + this.stock + " el costo final es de " + ( this.precio* cantidad ))
        } else {
            console.log (" solo quedan" + this.stock );
        }
    }

}
   const producto1 = new productos ( "tele", "electro", 1500,10 ,10 );
   console.log (producto1);
   producto1.calcularDescuento();
   producto1.comprar(3);
*/


