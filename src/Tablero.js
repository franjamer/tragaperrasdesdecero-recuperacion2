export const Tableros=[
{   Identificador : "imgn1",
    src : "ds",
    valor : 1
},
{   Identificador : "imgn2",
    src : "sd",
    valor : 2
},
{   Identificador : "imgn3",
    src : "sd",
    valor : 3
},

{   Identificador : "imgn4",
    src : "rer",
    valor : 4
}
];

export let recorreTablero=()=>{
let idTablero;
    for (let index = 0; index < Tableros.length-1; index++) {
     idTablero = Tableros[index].Identificador;
    console.log(idTablero);
}
    return (idTablero); 
}
console.log(recorreTablero)