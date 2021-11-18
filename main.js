const productos = [
    {ID: 5657, nombre: "Galaxy note 20 ultra", marca :"Samsung", stock: 10, img:"/images/note20.jpg"},
    {ID: 6895, nombre: "Iphone X ", marca :"Apple", stock: 30, img:"/images/iphone.jpg"},
    {ID: 7523, nombre: "TV 50' Ultra LED", marca :"LG", stock: 5, img:"/images/lg.jpg"},
    {ID: 4135, nombre: "Smart watch 20' ", marca :"Samsung", stock: 7, img:"/images/watch.jpg"},
    {ID: 2745, nombre: "Auriculares boost ", marca :"Sony", stock: 15, img:"/images/auri.jpg"},

];



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
        contenedorProd.innerHTML+=`
        <div class="card col-2" style="width: 9rem;">
  <img src="${e.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${e.nombre}</h5>
  <p class="card-text">${e.marca}</p>
  <h5 class="card-title">${e.stock}</h5>
    <button class="btn btn-primary" onclick="capturar(${e.id})">Agregar</button>
  </div>
</div>
        `
    }
}

function mostrarCarrito(array){
    let i=1; 
    contenedorCarrito.innerHTML="";
    for (e of array){
        contenedorCarrito.innerHTML+=`
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
    let prodcutoSeleccionado= productos.find(e => e.id == id);
    guardarStorage(agregarStorage(productoSeleccionado));
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
}

function quitar(id) {
    let carrito=JSON.parse(localStorage.getItem("carrito"));
    let carritofinal=carrito.filter(e=> e.id !=id );
    guardarStorage(carritofinal);
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos();
}

function sumarProductos (){
    let suma=0;
    let productosCarrito= JSON.parse(localStorage.getItem("carrito"));
    for (e of productosCarrito){
        suma += e.precio
    }
let total=document.querySelector("#totalCarrito").textContent=suma;
}



mostrarProd(productos);

if (localStorage.getItem("carrito")){
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarCarrito(JSON.parse(localStorage.getItem("carrito")));
}

document.querySelector("#filtrar").addEventListener("change",(e)=>{
    e.marca.value !="" ? mostrarProd(filtrar(productos, e.marca.value)) : mostrarProd(prodcutos);
})





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