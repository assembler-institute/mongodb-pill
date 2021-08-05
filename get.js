db.books.find({})

db.books.find({ category: 'category1' })

db.books.find({ releaseYear: { $lt: 2002 } })

db.authors.find({})

db.authors.find({}).projection({ dateOfDeath: 1})

db.authors.find({ country: 'country1' })