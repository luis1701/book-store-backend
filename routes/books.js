var express = require('express');
var router = express.Router();

const { getAll, getById, create } = require('../services/bookService')

/* GET books listing. */
router.get('/', async function(req, res, next) {
  console.log(req.query)
  const { category } = req.query
  const result = await getAll(category)
  res.send(result);
});

router.get("/:id", async function(req, res) {
  const { params } = req
  const { id } = params
  const result = await getById(id)
  res.send(result)
})

router.post('/', async function(req, res, next) {
  const { body } = req
  const result = await create(body)
  if (!result) {
    res.status(400).send('bad request');
  }
  res.send(result);
});

module.exports = router;
