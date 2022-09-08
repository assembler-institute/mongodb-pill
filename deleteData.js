// Deleting commands in DB

// 1. Eliminate all the books for a given author

db.books.remove({ 'authors.name': 'Alice'})

// 2. Eliminate all the death authors

db.authors.remove({dateOfDeath: {$ne: null}})