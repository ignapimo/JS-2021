console.log(document.getElementById("nombre"));
console.log(document.getElementsByClassName("heading2"));
console.log(document.querySelector("h1"));

//jQuery

console.log($("#nombre, h2"));
console.log($(".heading2"));
console.log($("h1"));
console.log($(".div p:nth-child(odd)"));

// document.getElementById("btn").addEventListener("click", ()=>{
//     console.log("hola");
// })

// $('#btn').addEventListener("click", ()=>{
//         console.log("hola");
//     })

const elemento = document.createElement("p");
elemento.innerHTML = "<h3>texto agregado</h3>";
document.getElementById("agregar").appendChild(elemento);
let variable = "hola que tal"

$("#agregar").append("<p>Aca agrego jQuery</p>");

$("#agregar").append(`mi variable es ${variable}`);

if ($("#texto").value == "Yael") {
    //codigo
}
for (i = 0; i < $("#texto").length; i++) {
    //codigo
}

$(".div p").each(()=>{
    console.log("hola");
})


/* 1. Crear en el HTML una tabla
    Producto y precio
    Tomate      50
    Leche       35
    Yerba       100

    2. Agreguen un producto mas por Jquery

    3. Le pongan un fondo gris al titulo - La primer fila

    4. Pinten las filas impares de verde.

*/
$("#tablaProductos tbody").append(`

                                <tr>
                                        
                                <td>Cerveza</td>

                                <td>150</td>

                                </tr>
                            `);

// $("#tituloProductos").css('background', 'grey');
//$("table tr:first-child").css('background', 'grey');
$("table tr:first-child").addClass("primeraFila");

$("table tr:nth-child(odd)").addClass("filaImpar");