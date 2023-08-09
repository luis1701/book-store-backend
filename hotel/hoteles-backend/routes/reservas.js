var express = require('express');
var router = express.Router();

const { getAll, getByUser, create, update, remove } = require('../services/reservaService')
//const { validateNewBookData, validateUpdateBookData } = require('../middlewares/booksMidd')

/* GET books listing. */
router.get('/', async function(req, res, next) {
  console.log(req.query)
  const { user } = req.query
  const result = await getAll(user)
  res.send(result);
});

router.get("/:id", async function(req, res) {
  const { params } = req
  const { user } = params
  const result = await getByUser(user)
  res.send(result)
})

router.post('/', /*validateNewBookData,*/ async function(req, res) {
  const { body } = req
  const result = await create(body)
  res.send(result);
});

router.patch('/:id', /*validateUpdateBookData,*/ async function(req, res) {
  const { params, body } = req
  const { id } = params
  const result = await update(id, body)
  res.send(result)
})

router.delete("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await remove(id)
  res.send(result)
})

module.exports = router;
