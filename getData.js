// getting data form DB


// 1. Select all books

db.books.find().pretty()

// 2. Select all books for a given category

db.books.find({category: 'Novel'}).pretty()

// 3. Select all books published before 2002

db.books.find({releaseYear: {$lt: new Date('2002')}}).pretty()

// 4. Select all books with more than one author

db.books.find({authors: {$gt: 1}}).pretty()

// 5. Select all authors

db.authors.find().pretty()

// 6. Select all death authors

db.authors.find({dateOfDeath: {$ne: null}})

// 7. Select all authors born before 1990
db.authors.find({dateOfBirth: {$lt: new Date('1990')}})

// 8. Select all authors from a given country
db.authors.find({country: 'GB'}).pretty()