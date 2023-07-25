const inspector = require('schema-inspector');

const userSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 4 },
    user: { type: 'string', minLength: 4 },
    email: { type: 'string', minLength: 10 },
    role: {
      type: 'string',
      pattern: /^(USER|ADMIN)$/
    },
    password:{type:'string',minLength:4}
  } // TODO add schema for User object here.
}

function validateNewUserData(req, res, next) {
  const { body } = req;
  const resultValidation = inspector.validate(userSchema, body)
  if (resultValidation.valid) {
    next();
    return;
  }
  res.status(400).send(resultValidation.error);
}

function validateUpdateUserData(req,res,next){
  const{body} = req;
  const updateSchema = userSchema;
  updateSchema.properties.name.optinal=true;
  updateSchema.properties.user.optional=true;
  updateSchema.properties.email.optional=true;
  updateSchema.properties.role.optional=true;
  updateSchema.properties.password.optinal=true;
  
  const resultValidation = inspector.validate(userSchema,body)
  if(resultValidation.valid){
    next();
    return;
  }
  res.status(400).send(resultValidation.error);
}

module.exports = {
  validateNewUserData,
  validateUpdateUserData
}