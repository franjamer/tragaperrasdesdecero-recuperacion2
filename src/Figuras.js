// creacion del objeto Figuras con su nombre, y su ruta
// export function componenteFiguras(){
export const Figuras=[
{   nombre: "ciruela",
    ruta:   "./imagenes/ciruela.svg",
    valor:  1
},
{
    nombre: "cereza",
    ruta :  "./imagenes/cereza.svg",
    valor:  2
},
{
    nombre: "fresa",
    ruta :  "./imagenes/fresa.svg",
    valor:  3
},{
    nombre: "Naranja",
    ruta :  "./imagenes/naranja.svg",
    valor:  4
},
{
    nombre: "Limón",
    ruta :  "./imagenes/limon.svg",
    valor:  5
},
{
    nombre: "Plátanos",
    ruta :  "./imagenes/platano.svg",
    valor:  6
},
{
    nombre: "Sandia",
    ruta :  "./imagenes/sandia.svg",
    valor:  7
},
{
    nombre: "Siete",
    ruta :  "./imagenes/siete.svg",
    valor:  8
},
{
    nombre: "Gran Premio",
    ruta :  "./imagenes/granpremio.svg",
    valor:  9
}
]

export let recorridoFiguras=()=>{
    let figura;
        for (let index = 0; index < Figuras.length; index++) {
             figura = Figuras[index].nombre;
            console.log(figura)
        }
         return figura
    }
