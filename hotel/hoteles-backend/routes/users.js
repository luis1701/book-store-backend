var express = require('express');
var router = express.Router();

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

const { getAll, getUser, createUser, updateUser, removeUser, login } = require('../services/userService')
const { validateNewUserData, validateUpdUserData, validateLogin } = require('../middlewares/usersMidd')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  console.log("EJERCICIO 1")
  orderArray(numbers)

  console.log("*************************************")

  console.log("EJERCICIO 2")
  stringMoreLarge("Curso de javascript con react")

  console.log("*************************************")
  
  console.log("EJERCICIO 3")
  palindromo("OJO")
  palindromo("PRUEBA")

  //console.log(req.query)
  const { role } = req.query
  const result = await getAll(role)
  res.send(result);
});

router.get("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await getUser(id)
  res.send(result)
})

router.post('/', validateNewUserData, async function(req, res) {
  const { body } = req
  const result = await createUser(body)
  res.send(result);
});

router.post('/login', validateLogin, async function(req, res) {
  const { body } = req
  const result = await login(body.name, body.password)
  res.send(result);
});

router.patch('/:id', validateUpdUserData, async function(req, res) {
  const { params, body } = req
  const { id } = params
  const result = await updateUser(id, body)
  res.send(result)
})

router.delete("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await removeUser(id)
  res.send(result)
})

module.exports = router;
