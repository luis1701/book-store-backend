const {getAllDB, getByIdDB, createDB, updateDB, removeDB} = require('../repository/bookRepository')

async function getAll(category) {
  let params = {}
  if (category) {
    params = {...params, category}
  }
  const resultFromDb = await getAllDB(params)

  return resultFromDb
}

async function getById(id) {
  const result = await getByIdDB(id)
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

// module.exports = getById
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}