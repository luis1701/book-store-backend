const inspector = require('schema-inspector');

const bookSchema = {
  type: 'object',
  properties: {
      name: { type: 'string', minLength: 4 },
      author: { type: 'string', minLength: 4 },
      category: { type: 'string', minLength: 3 },
      calification: {
          type: 'array',
          items: { 
            type: 'object',
            properties: {
              user: { type: 'string', minLength: 4 },
              calification: { type: 'number', gt: 0, lt: 6 },
            },
          },
          minLength: 0
      },
      comments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            author: { type: 'string', minLength: 4 },
            date: { type: 'string', minLength: 8 },
            comment: { type: 'string', minLength: 4 }
          },
        },
        minLength: 0
      },
  },
};

function validateNewBookData(req, res, next) {
  const { body } = req
  const resultValidation = inspector.validate(bookSchema, body)
  if (resultValidation.valid) {
    next()
    return
  }
  res.status(400).send(resultValidation.error);
}

function validateUpdateBookData(req, res, next) {
  const { body } = req
  
  const updateSchema = bookSchema
  updateSchema.properties.name.optional = true
  updateSchema.properties.author.optional = true
  updateSchema.properties.category.optional = true
  updateSchema.properties.calification.optional = true
  updateSchema.properties.comments.optional = true


  const resultValidation = inspector.validate(bookSchema, body)
  if (resultValidation.valid) {
    next()
    return
  }
  res.status(400).send(resultValidation.error);
}

module.exports = {
  validateNewBookData,
  validateUpdateBookData
}


// calification: calification,
// user: userName

// author: userName,
// date: new Date().toDateString(),
// comment