const {getAllDB, getByIdDB, createDB, updateDB, removeDB} = require('../repository/hotelRepository')

async function getAll(ciudades) {
  let params = {}
  if (ciudades) {
    params = {...params, ciudades}
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

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}