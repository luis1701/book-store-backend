//console.log('Hola mundo')

// EXERCISE NUMBER 1:

//Array de objetos:
const objets = [
    { name:'Carla', value:7, edad: 100},
    { name: 'Luis', value:6, edad: 20}, 
    { name: 'Renata', value:8, edad: 12},
    { name: 'Paola', value:10, edad: 60}
]
//Valor con el que se ordenara:
const orderByValue = "edad";

function orderByPropertie(vector, property) {
    vector.sort((a, b) => a[property] - b[property]);
    return vector;
  }


const finalVector = orderByPropertie(objets, orderByValue);
console.log(finalVector);


// EXCERCISE 2: Buscar la palabra mas larga:

const cadena = 'Hola como estas Guadalupe 1234567891 doce queda la Replublica'
const cadena2 = ''

function searchLarger (conjunto){
   
    const palabras = conjunto.split(" ")
    if (palabras.length === 0) {
        return null
    }
    var masLarga = palabras [0]

    for (var i = 1; i < palabras.length; i++) {
        const palabraAhora = palabras[i];
        if (palabraAhora.length > masLarga.length) {
          masLarga = palabraAhora; 
        }
      }
    return masLarga
    } 

console.log(searchLarger(cadena))
console.log(searchLarger(cadena2))

//Recorrer el array:

//EXEERCISE 3:
// Palindromo en jvascript:

const wordA = 'oso'
const worDB = 'radar'
const wordC = 'reconocer'
const wordD = 'cantar'

function Palindromo (word){
    const convertToLowerCase = word.toLowerCase().replace(/[^\w]/g, "");
    const isPalindromo = convertToLowerCase === convertToLowerCase.split("").reverse().join("") ? "Es palindromo" : "No es palindromo"
    return isPalindromo;
}
  
console.log(Palindromo(wordA))
console.log(Palindromo(worDB))
console.log(Palindromo(wordC))
console.log(Palindromo(wordD))
