let productos = [
    {ID: 5657, nombre: "Galaxy note 20 ultra", marca :"Samsung", stock: 10},
    {ID: 6895, nombre: "Iphone X ", marca :"Apple", stock: 30},
    {ID: 7523, nombre: "TV 50' Ultra LED", marca :"LG", stock: 5},
    {ID: 4135, nombre: "Smart watch 20' ", marca :"Samsung", stock: 7},
    {ID: 2745, nombre: "Auriculares boost ", marca :"Sony", stock: 15},

]



productos.sort ((a,b) => 
 {
    if (a.stock <b.stock) {
        return - 1;
    }
    else if (a.stock >b.stock )  {
        return 1;
    } else {

        return 0;
    }



    
});


let contenedorProd = document.querySelector("#contenedorProductos");
let contenedorCarrito = document.querySelector("#contenedorCarrito");

function mostrarProd(array) {
    contenedorProd.innerHTML="";
    for (e of array){
        contenedorProductos.innerHTML+=`
        <div class="card" style="width: 18rem;">
  <img src="${e.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.ID}</h5>
    <p class="card-text">${e.stock}</p>
    <h5 class="card-title">${e.nombre}</h5>
    <button class="btn btn-primary" onclick=>Agregar</button>
  </div>
</div>
        `
    }
}

function mostrarCarrito(array){
    let i=0; 
    contenedorCarrito.innerHTML="";
    for (e of array){
        contenedorCarrito+=`
        <tr>
        <th scope="row">${i++}</th>
        <td>${e.ID}</td>
        <td>${e.nombre}</td>
        <td>${e.marca}</td>
        <td>${e.stock}</td>
        <td><button class="btn btn-danger" onclick="quitar${e.ID}">X</button></td>
      </tr>`
    }
    contenedorCarrito.innerHTML+=`
    <tr>
    <td class="text-center" colspan="3">Total</td>
    <td colspan="2">$<span id ="totalCarrito">0</span></td>
    </tr>
    
    `

}
function agregarStorage(producto){
    let storage= localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    storage.push(producto);
    return storage;
}

function guardarStorage(array){
    localStorage.setItem("carrito", JSON.stringify(array));
}

function capturar(id){
    let prodcutosSeleccionado= productos.find(e => e.id == id);
    guardarStorage(agregarStorage(productoSeleccionado));
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
}

function quitar(id) {
    let carrito=JSON.parse(localStorage.getItem("carrito"));
    let carritofinal=carrito.filter(e=> e.id !=id );
    guardarStorage(carritofinal);
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
}



mostrarProd(productos);





for (const value of productos){
    console.log(value);
}

let divticket =document.createElement("div");
divticket.id= 'divticket';
document.body.appendChild(divticket)



let botonCargar = document.getElementById("botonCargar")

botonCargar.addEventListener ("click", () => {
    document.querySelector('h1').textContent = 'Welcome'
}
 )

console.log ( document.querySelector('h1'))


let divClases = document.getElementById("random")




$("#formulario").on("submit", function(e){
    console.log(formulariod
        );
})




const imprimirDatos = () => {
    verificarStorage().forEach(obj => {
        document.getElementById("lista").innerHTML +=`
        <tr>
            <td>${obj.id} </td>
            <td>${obj.nombre} </td>
            <td>${obj.marca} </td>
            <td>${obj.stock} </td>
        </tr>
        `
} )}
