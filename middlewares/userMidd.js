const inspector = require('schema-inspector');

const userSchema = {
  type: 'object',
  properties: {
      name: { type: 'string', minLength: 4 },
      role: {
        type: 'object',
        properties: {
            valor: {
                type: 'string',
                eq: ['ADMIN', 'USER']
            }, 
        },  
    },
      password: { type: 'string', minLength: 3 }
  },
};

function validateCreateUser(req, res, next) {
  const { body } = req;

  const resultValidation = inspector.validate(userSchema, body);
  if (resultValidation.valid) {
    next();
  } else {
    // Si la validación falla, responde con un código de estado 400:
    res.status(400).json({ error: resultValidation.error });
  }
}

function validateUpdateUserData(req, res, next) {
  const { body } = req;

  // Crear una copia independiente del esquema utilizando JSON.parse y JSON.stringify
  const updateSchema = JSON.parse(JSON.stringify(userSchema));


  // Establecer la propiedad 'required'
  updateSchema.properties.name.optional = true;
  updateSchema.properties.role.optional = true;
  updateSchema.properties.password.optional = true;

  const resultValidation = inspector.validate(updateSchema, body);
  if (resultValidation.valid) {
    next();
    return;
  }
  res.status(400).send(resultValidation.error);
}


module.exports ={
    validateCreateUser,
    validateUpdateUserData
}