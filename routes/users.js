var express = require('express');
var router = express.Router();

const { getAll, getUser, createUser, updateUser, removeUser } = require('../services/userService')
const { validateNewUserData, validateUpdUserData } = require('../middlewares/usersMidd')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(req.query)
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
