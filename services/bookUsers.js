const {getAllDBusers, removeDBusers, getByIdDBusers, createDBusers} = require ('../repository/usersRepository')

async function getAllUsers(){
    const resultFromDbUsers = await getAllDBusers()
    return resultFromDbUsers
}

async function getByIdUsers(id) {
    const result = await getByIdDBusers(id)
    return result
  }

async function removeUsers(id) {
    const resultUsers = await removeDBusers(id)
    return resultUsers
  }

async function createUsers(data) {
    const result = await createDBusers(data)
    return result
  }

  
module.exports = {
    getAllUsers,
    removeUsers,
    getByIdUsers,
    createUsers
    
}