//1. Ordenar Array de Objetos:
//Escribe una función que tome un array de objetos con una propiedad numérica y los ordene en orden ascendente según el valor de esa propiedad.



function OrdenarArrayDeObjetos(array) {
  //console.log("hola mundo");
  let valores=[];

  array.map((objeto)=>{
    valores.push(objeto.num)
  });

  valores.sort();

  let ordenado = [];
  valores.map((valor)=>{
    ordenado.push({num:valor})
  });
  
  console.log(ordenado);
}

OrdenarArrayDeObjetos(
  [
    { num: 45 },
    { num: 80 },
    { num: 23 },
    { num: 33 },
  ]
);

OrdenarArrayDeObjetos(
  [
    { num: 99 },
    { num: 55 },
    { num: 32 },
    { num: 15 },
  ]
);