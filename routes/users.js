var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getUserByParams
} = require('../services/userService');
const { validateNewUserData, validateUpdateUserData } = require('../middlewares/usersMidd');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  //res.send('respond with a resource');
  const result = await getAllUsers()
  res.send(result);
});

router.get("/:id", async function (req, res) {
  const { params } = req;
  const { id } = params;
  const result = await getUserById(id);
  res.send(result);
});

router.post('/', validateNewUserData, async function (req, res) {
  const { body } = req;
  const result = await createUser(body)
  res.send(result);
});

router.patch('/:id', validateUpdateUserData, async function (req, res) {
  const { params, body } = req;
  const { id } = params;
  const result = await updateUser(id, body);
  res.send(result);
});

router.delete('/:id', async function (req, res) {
  const { params } = req;
  const { id } = params;
  const result = await removeUser(id);
  res.send(result);
});

router.post('/login', async function (req, res) {
  const { body } = req;
  const result = await getUserByParams(body);
  res.send(result);
})
module.exports = router;
