const users = [
    {
      name: "Administrador",
      user: "admin",
      role: "ADMIN",
      password: "admin"
    },
    {
      name: "Marcos Flores",
      user: "mflores",
      role: "USER",
      password: "mflores"
    }
  ]
    
  function login(user, password) {
    return users.find(userInfo => userInfo.user === user && userInfo.password === password)
  }
    
  export {
    login
  }