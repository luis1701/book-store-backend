const { 
  createUserDB, 
  getAllUsersDB, 
  getUserByIdDB, 
  updateUserDB, 
  removeUserDB, 
  getUserByParamsDB
} = require("../repository/userRepository");

async function createUser(data) {
  const result = await createUserDB(data);
  return result;
}

async function getAllUsers() {
  const usersFromDB = await getAllUsersDB();
  return usersFromDB;
}

async function getUserById(id){
  const result = await getUserByIdDB(id);
  return result;
}

async function updateUser(id,data){
  const result = await updateUserDB(id,data);
  return result;
}

async function removeUser(id){
  const result = await removeUserDB(id);
  return result;
}

async function getUserByParams(params){
  const {user,password}=params;
  const result = await getUserByParamsDB(user,password);
  return result;
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  removeUser,
  getUserByParams
}