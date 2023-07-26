const inspector = require('schema-inspector');

const userSchema = {
  type: 'object',
  properties: {
      name: { type: 'string', minLength: 4 },
      role: { type: 'string', minLength: 4 },
      password: { type: 'string', minLength: 4 },
  },
};

const loginSchema = {
  type: 'object',
  properties: {
      name: { type: 'string', minLength: 4 },
      password: { type: 'string', minLength: 4 },
  },
};

function validateNewUserData(req, res, next) {
  
  const { body } = req
  
  const resultValidation = inspector.validate(userSchema, body)
  if (resultValidation.valid) {
    if (body.role === "ADMIN" || body.role === "USER") {
      next()
      return
    }
  }
  res.status(400).send(resultValidation.error);
}

function validateUpdUserData(req, res, next) {
  const { body } = req
  
  const updateSchema = userSchema
  updateSchema.properties.name.optional = true
  updateSchema.properties.role.optional = true
  updateSchema.properties.password.optional = true

  const resultValidation = inspector.validate(userSchema, body)
  if (resultValidation.valid) {
    next()
    return
  }
  res.status(400).send(resultValidation.error);
}

function validateLogin(req, res, next) {
  const { body } = req
  
  const loginUserSchema = loginSchema
  loginUserSchema.properties.name.optional = true  
  loginUserSchema.properties.password.optional = true

  const resultValidation = inspector.validate(loginUserSchema, body)
  if (resultValidation.valid) {
    next()
    return
  }
  res.status(400).send(resultValidation.error);
}

module.exports = {
  validateNewUserData,
  validateUpdUserData,
  validateLogin
}
