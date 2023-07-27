const {getAllUser, getUserById, createUserDB, updateUserDB, removeUserById, getUserByParams} = require('../repository/userRepository')

async function getAll(role) {
  let params = {}
  if (role) {
    params = {...params, role}
  }
  const resultFromDb = await getAllUser(params)

  return resultFromDb
}

async function getUser(id) {
  const result = await getUserById(id)
  return result
}

async function login(user, pwd) {
  const params = {
    name: user,
    password: pwd
  }
  const result = await getUserByParams(params)
  return result
}

async function createUser(data) {
  const result = await createUserDB(data)
  return result
}

async function updateUser(id, data) {
  const result = await updateUserDB(id, data)
  return result
}

async function removeUser(id) {
  const result = await removeUserById(id)
  return result
}

// module.exports = getById
module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  removeUser,
  login
}