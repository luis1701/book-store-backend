const numbers = [0,5,3,8,2,4]

const orderArray = (notOrderArray) => {
  
  console.log("array sin ordenar")
  console.log(notOrderArray)
  notOrderArray.sort()
  console.log("array ordenado")
  console.log(notOrderArray)
}

const stringMoreLarge = (text) => {
  var aux = ""
  var sizeAux = aux.length
  const textInArray = text.split(" ");
  for(var i=0; i<=textInArray.length -1; i++) {
    if (textInArray[i].length > sizeAux) {
      sizeAux = textInArray[i].length
      aux = textInArray[i]  
    }
  }
  console.log("Cadena recibida")
  console.log(text);
  console.log("Palabra más larga")
  console.log(aux)
}

const palindromo = (text) => {

  const aux = text.toUpperCase().split("")
  var palindromo = ""
  const reversed = aux.reverse()   
  for(var i=0; i<=reversed.length -1; i++) {
    palindromo = palindromo + reversed[i]
  }

  console.log("Palabra original")
  console.log(text.toUpperCase())
  console.log("Palabra invertida")
  console.log(palindromo)

  if (palindromo === text.toUpperCase()) {
    console.log("Son palindromos")
  } else {
    console.log("No son palindromos")
  }  
}

console.log("EJERCICIO 1")
orderArray(numbers)

console.log("*************************************")

console.log("EJERCICIO 2")
stringMoreLarge("Curso de javascript con react")

console.log("*************************************")

console.log("EJERCICIO 3")
palindromo("OJO")
palindromo("PRUEBA")