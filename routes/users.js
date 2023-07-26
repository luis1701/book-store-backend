var express = require('express');
var router = express.Router();

const { getAllUsers, removeUsers,  getByIdUsers, createUsers} = require('../services/bookUsers');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const {  } = req.query
  const resultUsers = await getAllUsers()
  res.send(resultUsers);
});

router.get("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await getByIdUsers(id)
  res.send(result)
})


router.delete("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const resultUsers = await removeUsers(id)
  res.send(resultUsers)
})

router.post('/', async function(req, res) {
  const { body } = req
  const result = await createUsers(body)
  res.send(result);
});


module.exports = router;
