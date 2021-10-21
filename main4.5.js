//adquirir productos en tienda//

let precio = 0;
let contador = 0;
                                                
do {
    var valor = parseInt(prompt("ingrese precio del producto"))
    if (valor <0 ){
        alert ("por favor ingresar un numero mayor a 0")
    }
    precio += valor;
    contador++;

    var sigo = prompt("Compro algun otro producto?")


} while ((valor >=0) && (sigo == "si"))


let promedio = precio/ contador;

console.log (promedio)