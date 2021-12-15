//Eliminate all the books for a given author
db.books.remove({ 'authors.name': 'Amira' })

//Eliminate all the death authors
db.authors.deleteMany({ dateOfDeath: { $in: ["2012-03-08", "2011-01-05", "1999-05-07"] }})