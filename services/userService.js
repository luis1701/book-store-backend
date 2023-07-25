const {getAllUsers, getUsersById, removeUsers, createUser, updateUser} = require('../repository/userRepository')

async function getAll(role) {
    let params = {}
    if (role) {
      params = {...params, role}
    }
    const resultFromDb = await getAllUsers(params)
  
    return resultFromDb
  }

async function getUsers(id) {
    const result = await getUsersById(id)
    return result
  }

async function create (data){
  const result = await createUser(data)
  return result
}

async function update(id, data){
  const result = await updateUser(id, data)
  return result
}

async function remove(id){
  const result = await removeUsers(id)
  return result
}

module.exports = {
    getAll,
    getUsers,
    create,
    update, 
    remove
}