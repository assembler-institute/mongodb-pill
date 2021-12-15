//Eliminate all the books for a given author
db.books.remove({ 'authors.name': 'Paulo Coelho' })

//Eliminate all the death authors
db.authors.remove({ dateOfDeath: { $exists: true } })