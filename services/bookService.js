const {getAllDB, getByIdDB, createDB} = require('../repository/bookRepository')

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
  try {
    const result = await createDB(data)
    return result
  } catch (error) {
    return false
  }
}

// module.exports = getById
module.exports = {
  getAll,
  getById,
  create
}