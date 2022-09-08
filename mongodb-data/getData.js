//To find for all books
db.books.find({})


//Find all books category
db.books.find({ category: 'category' })


//Select all books published before the date
db.books.find({ releaseYears: { $lt: XXXX } })


//Select all books +1 author
db.books.find({ 'authors.1': { $exists: true } })


//Select all authors
db.authors.find({})


//Select all death authors
db.authors.find({ dateOfDeath: { $exists: true } })


//Select all authors born before the date
db.authors.find({ dateOfBirth: { $lt: ISODate('XXXX-XX-XX') } })


//Select all authors from  country write
db.authors.find({ country: 'Spain' })