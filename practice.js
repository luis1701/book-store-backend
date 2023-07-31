/*1. Ordenar Array de Objetos:
Escribe una función que tome un array de objetos con una propiedad numérica y los ordene en orden ascendente según el valor de esa propiedad.
*/
const datos = [
    {
        id:333,
        nombre:"emmanuel3",
        apellido:"camacho3"
    },
   
    {
        id:111,
        nombre:"emmanuel1",
        apellido:"camacho1"
    },
    {
        id:222,
        nombre:"emmanuel2",
        apellido:"camacho2"
    }
]




const datosOrdenado =  datos.sort((a,b)=>{
    return a.id-b.id
})

//console.log(datosOrdenado);

/*2. Buscar palabra más larga:
Escribe una función que tome una cadena de texto y encuentre la palabra más larga en esa cadena. Si hay varias palabras con la misma longitud máxima, devuelve la primera que encuentres.*/

function buscarPalabra (cadena){

    const palabras = cadena.split(" ");
    let  myPalabraLarga =[0];

    for (i=1 ; i<palabras.length; i++){
        if(palabras[i].length > myPalabraLarga.length){
            myPalabraLarga = words[i];
        }
    }
   
    return myPalabraLarga;
}

const Resultado2 = buscarPalabra("Santa Cruz, 26 de julio de 2023.- El presidente del Servicio de Impuestos Nacionales (SIN), Mario Cazón, informó que a partir de este 1 de agosto un total de 13.741 contribuyentes del Régimen General")

console.log(Resultado2);


/*3. Palíndromos:
Escribe una función que verifique si una palabra dada es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda, ignorando espacios y signos de puntuación).*/

