//ordenar array de objetos por la propiedad numerica y ordenar de fomar ascendente
const names = [{name: 'yerson' , age :55 },
             {name: 'raul', age : 33},
             {name: 'jorge' , age: 35} ]

    names.sort( (a,b) => {
        if(a.age<b.age){
        return -1;}
        if(a.age>b.age){
        return 1;}
        if (a.name< b.name) {
            return -1;
        }
        if (a.name< b.name) {
            return 1;
        }
    });
    //console.log(elemento);

//buscar la palabra mas larga 

let palabras = ['largo', 'larguisimo', 'larguisisimo', 'megalarguisimo'];
    let totales  = [];
    for(let palabra of palabras) {
      totales.push(palabra.length);
    }
    
    let maximo = Math.max.apply(null, totales);
    
    for (let elemento of palabras) {
      if (elemento.length === maximo) {
        //console.log(elemento);
      }
    }
// palabra palindromo

function texto()
{
	var palabra=prompt("Escribe una palabra ana").toLowerCase();
	palabra=palabra.replace(/ /g, "");
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
if(texto())
{
	alert("Esto es palíndromo");
}else{
	alert("Esto no es palíndromo")
}