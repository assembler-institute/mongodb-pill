// Eliminate all the books for a given author
db.books.remove({ "authors.name": "Herman"  })

// Eliminate all the death authors
db.authors.remove({ dateDeath: { $exists: true } })