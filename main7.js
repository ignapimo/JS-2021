/*
let mensaje = "Bienvenidos a la clase 7";

localStorage.setItem("saludo", mensaje);

console.log(localStorage.getItem("saludo"));

//sessionStorage mantiene info solo en una pestaña. si se cierra se pierde//
sessionStorage.setItem("temporal", 2021);

//SIempre que use get item, la consola me traera el valo entre comillas//

//NO se usa for of o for in con localStorage, solo el for comun//
*/


/*
for (i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("La clave es  " + clave);
    console.log ("El valor es: " + localStorage.getItem(clave));
}


localStorage.removeItem("saludo");

//localStorage.clear(); borra todo//
*/
/*
class productos {
    constructor (nombre,precio) {
        this.nombre= nombre;
        this.precio= precio;
    }
}

let prod1 = new productos ("pantalones", 1500);
localStorage.setItem("producto",JSON.stringify(prod1));

let dato = JSON.parse(localStorage.getItem("producto"));
console.log(dato);
console.log(dato.nombre);
console.log(dato.precio);

*/

/*

const listaMascota = () => [];

const nuevaMascota = () => {
    const nombre = prompt("ingrese el nombre de su mascota");
    const tipo = prompt("ingrese el tipo de su mascota");
    const edad = prompt("Que edad tiene su mascota?");

    const mascota = new mascotas(nombre, tipo, edad );

    if (localStorage.getItem("mascotas") == null){
        listaMascota.push(mascota);
        localStorage.setItem("mascotas", JSON.stringify(listaMascota));

    }else {
        let listaNueva =JSON.parse(localStorage.getItem("mascotas"));
        listaNueva.push(mascota);
        localStorage.setItem("mascota", JSON.stringify(listaNueva));

    }

let listaNueva = JSON.parse(localStorage.getItem("mascotas"));
//listaMascota.push(mascota);
//localStorage.setItem("mascotas",JSON.stringify(listaMascota));
localStorage.setItem("mascotas",JSON.stringify(listaNueva));




}
*/