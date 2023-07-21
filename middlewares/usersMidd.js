const inspector = require('schema-inspector');

const userSchema = {
  type: 'object',
  properties: {
    name: {type: 'string', minLength:4},
    user: {type: 'string', minLength:4},
    email: {type: 'string', minLength:10},
    role: {
      type: 'string',
      exec: function(userSchema,role){
        if(role !== "USER"){
          this.report();
          return '_INVALID_'; 
        }
        return role;
      }
    }
  } // TODO add schema for User object here.
}

function validateNewUserData(req,res,next){
  const {body} = req;
  const resultValidation = inspector.validate(userSchema,body)
  if(resultValidation.valid){
    next();
    return;
  }
  res.status(400).send(resultValidation.error);
}

module.exports = {
  validateNewUserData
}