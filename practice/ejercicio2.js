//2. Buscar palabra más larga:
//Escribe una función que tome una cadena de texto y encuentre la palabra más larga en esa cadena. 
//Si hay varias palabras con la misma longitud máxima, devuelve la primera que encuentres.

function cadenaMasLarga(texto){
  //console.log(texto);
  let cadenas = texto.split(" ");
  //console.log(cadenas);

  let masLargo ="";
  let actual = "";

  cadenas.map((cadena)=>{
    if (cadena.length>actual.length) {
      actual=cadena;
    }
    if(actual.length>masLargo.length){
      masLargo=actual;
    }
  })
  console.log(masLargo);
}

cadenaMasLarga("esta es una cadena con varias palabras");

cadenaMasLarga("esta es 023456780 una cadena con varias palabras 123456789");

cadenaMasLarga("palabras22 esta es otra cadena que tiene varias palabras11")