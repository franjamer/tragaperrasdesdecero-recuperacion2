import {Figuras,recorridoFiguras} from "./Figuras.js";
import {Tableros, recorreTablero} from "./Tablero.js";

/** Seccion de funciones principales */

/** funcion principal para realizar numero aleatorio */
let numAleato = ()=>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
   return getRandomInt(9);
}



// prueba de fichero Figuras
console.log(Figuras[0].nombre);
// prueba de fichero Tablero
console.log(Tableros[0].Identificador);
// prueba de funcion numAleato
console.log(numAleato())
const rutaTablero=Tableros[0];
console.log(rutaTablero);
console.log(recorreTablero)

console.log(Figuras.length);
console.log(Tableros.length);

console.log(recorridoFiguras())


// let valorTirada=()=>{
//     let totalValorTirada=0;
//     for (let i=0; i<Tableros.length; i++){
//         console.log(Tableros[i].ruta);
//     totalValorTirada+=Tableros[i].valor;
//     }
//     console.log(totalValorTirada)
//     return totalValorTirada;
// }
// console.log(valorTirada)






/*eslint no-unused-vars: "error"*/    

/*eslint no-undef: "error"*/
// document.addEventListener("DOMContentLoaded", () =>{
// const startButton = document.getElementById("tirarx4");
// const pointsValue = document.getElementById("")
// const valorDePuntos=document.getElementById("puntosTirada")
// const frame1=Tableros[0].Identificador;
// const frame2=Tableros[1].Identificador;
// const frame3=Tableros[2].Identificador;


// let images=Figuras;

// let counter=0;
// let timer;
// let ultimasTresImagenes=[];    
// function mostrarImagen(frame){
//     const randomIndex  = Math.floor(Math.random()* images.length);
//     const{src,value} = images[randomIndex];
//     frame.css("background-image", "url('" + src + "')");
//     ultimasTresImagenes.push(value)

//     if (ultimasTresImagenes.length > 3){
//         ultimasTresImagenes.shift();
//     }
// }
//     function sumarValores()
//     {
//         return ultimasTresImagenes.reduce((total,value)=>total+value,0);
//     }
//     function iniciarPresentacion(){
//         mostrarImagen(frame1);
//         mostrarImagen(frame2);
//         mostrarImagen(frame3);
//         counter++;

//     if (counter === 10){
//         clearInterval(timer);
//         const totalPoints = sumarValores();
//         pointsValue.text(totalPoints);
//       }
// }




// startButton.on("click",()=>{
//     counter=0;
//     ultimasTresImagenes =[];
//     valorDePuntos.text("0");
//     timer= setInterval(iniciarPresentacion,500)
// })

// })


