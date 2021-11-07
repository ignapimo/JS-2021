let producto = [
    {ID: 5657, nombre: "Galaxy note 20 ultra", marca :"Samsung", stock: 10},
    {ID: 6895, nombre: "Iphone X ", marca :"Apple", stock: 30},
    {ID: 7523, nombre: "TV 50' Ultra LED", marca :"LG", stock: 5},
    {ID: 4135, nombre: "Smart watch 20' ", marca :"Samsung", stock: 7},
    {ID: 2745, nombre: "Auriculares boost ", marca :"Sony", stock: 15},

]



producto.sort ((a,b) => 
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

for (const value of producto){
    console.log(value);
}

let divticket =document.createElement("div");
divticket.id= 'divticket';
document.body.appendChild(divticket)





let botonCargar = document.getElementById("botonCargar")

botonCargar.addEventListener ("click", () => {
    document.querySelector('h1').textContent = 'Cambio texto desde JS'
    console.log ("Lorem")
}
 )



console.log (document)




console.log ( document.querySelector('h1'))





let divClases = document.getElementById("random")

let parrafo = document.createElement ("p")

parrafo.className ="People"
parrafo.innerHTML = "Esto es una prueba"


divClases.appendChild (parrafo)




