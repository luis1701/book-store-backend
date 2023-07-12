const getAllDB = require('../repository/bookRepository')

async function getAll(category) {
  let params = {}
  if (category) {
    params = {...params, category}
  }
  const resultFromDb = await getAllDB(params)

  return resultFromDb
}

module.exports = getAll