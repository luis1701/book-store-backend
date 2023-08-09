const {getAllDB, getByUserDB, createDB, updateDB, removeDB} = require('../repository/reservaRepository')

async function getAll(user) {
  let params = {}
  if (user) {
    params = {...params, user}
  }
  const resultFromDb = await getAllDB(params)

  return resultFromDb
}

async function getByUser(user) {
  const result = await getByUserDB(user)
  return result
}

async function create(data) {
  const result = await createDB(data)
  return result
}

async function update(id, data) {
  const result = await updateDB(id, data)
  return result
}

async function remove(id) {
  const result = await removeDB(id)
  return result
}

module.exports = {
  getAll,
  getByUser,
  create,
  update,
  remove
}