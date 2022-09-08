
// GET DATA

// select all books
db.books.find()

// select all books for a given category
db.books.find({ category: "dystopian"})


// select all books published before 2002
db.books.find({ releaseYear: { $lt: new Date('2002') } })


// select all books with more than one author
db.books.find({ "authors.1": { $exists: true } })



// select all authors
db.authors.find()


// select all dead authors
db.authors.find({ dateOfDeath: { $lt: new Date() }})


// select all authors born before 1990
db.authors.find({ dateOfBirth: { $lt: new Date('1999') }})


// select all authors from a given country
db.authors.find({ country: "United Kingdom" })

