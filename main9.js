


























































/*
const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#boton");

const escribir = () => {
    let texto = prompt("Que queres escribir");
    parrafo.textContent = texto;
}

/*
Como escuchamos eventos?
1- selector.metodo (evento, funcion)
*/

//boton.addEventListener("click", escribir);

/*
boton.addEventListener("click", ()=>{
    escribir();
})
*/
/*
boton.onclick = () => {escribir()}
*/



//En HTML <button id="boton" onclick="escribir()">Enviar</button>

//Eventos mecanicos y de logica

/*
//existe mouseout, mousemove
boton.addEventListener("mouseover", () => {
    console.log ("chau")
})
*/

/*
//2- Teclado
const texto = document.querySelector("#texto");
texto.onkeydown = ()=> {
    console.log(texto.value);
}
*/

/*
// LOGICA
const texto = document.querySelector("#texto");
texto.onchange = () => {
    console.log ("el nuevo valor es" + texto.value)
}


const selector = document.querySelector("#selector");
selector.addEventListener("change", ()=> {
    console.log(selector.value);
} )

boton.onclick = (e) => {
    e.preventDefault();
    console.log ("hace submit");
}
/*¿¿*/