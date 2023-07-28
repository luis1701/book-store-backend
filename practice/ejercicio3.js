//3. Palíndromos:
//Escribe una función que verifique si una palabra dada es un palíndromo 
//(se lee igual de izquierda a derecha que de derecha a izquierda, ignorando espacios y signos de puntuación).

function esPalindromo(palabra){
  //console.log(palabra.split(""));
  let res=false;
  if (palabra.length%2===0) {
    let mitad1 = palabra.slice(0,palabra.length/2);
    //console.log(mitad1);
    let mitad2 = palabra.slice(palabra.length/2,palabra.length).split("").reverse().join("");
    //let mitad3 = mitad2.split("").reverse();
    
    if (mitad1===mitad2) {
      res = true;
    }
    
  }else{
    //console.log(Math.trunc(palabra.length/2))
    let mitad1 = palabra.slice(0,(Math.trunc(palabra.length/2)));
    let mitad2 = palabra.slice((Math.trunc(palabra.length/2))+1,palabra.length).split("").reverse().join("");
    //console.log(mitad1)
    //console.log(mitad2)
    if (mitad1===mitad2) {
      res=true
    }
  }
  console.log(res);
}

esPalindromo("aabbbbaa");
esPalindromo("oro");
esPalindromo("palabra");
esPalindromo("oruro");