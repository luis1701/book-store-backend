var express = require('express');
var router = express.Router();

const { getAll, getUsers, remove, create, update } = require('../services/userService');
const { validateCreateUser, validateUpdateUserData } = require('../middlewares/userMidd');
/* GET books listing. */
router.get('/', async function(req, res, next) {
  console.log(req.query)
  const { role } = req.query
  const result = await getAll(role)
  res.send(result);
});

router.get("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await getUsers(id)
  res.send(result)
})

router.post('/', validateCreateUser, async function(req, res){
  const { body } = req
  const result = await create(body)
  res.send(result);
})

router.patch('/:id', validateUpdateUserData, async function(req, res){
  const { params, body } = req
  const { id } = params
  const result = await update(id, body)
  res.send(result)
})

router.delete("/:id", async function(req, res){
  const { params } = req
  const { id } = params
  const result = await remove(id)
  res.send(result)
})

module.exports = router;
