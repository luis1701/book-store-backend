var express = require('express');
var router = express.Router();

const getAll = require('../services/bookService')

/* GET books listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  const { category } = req.query
  const result = getAll(category)
  res.send(result);
});

module.exports = router;
