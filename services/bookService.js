function getAll(category) {
  const resultFromDb = [
    {
      name: 'libro1',
      author: 'Autor 1',
      category: 'DRAMA',
      calification: [], // [3,5,2,4]
      comments: []
    },
    {
      name: 'libro2',
      author: 'Autor 2',
      category: 'COMEDY',
      calification: [], // [3,5,2,4]
      comments: []
    }
  ]

  if (category) {
    return resultFromDb.filter(book => book.category === category)
  }
  return resultFromDb
}

module.exports = getAll