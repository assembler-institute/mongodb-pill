//Add a date of death to one Author
db.authors.update({ name: 'Juan' }, {$set:{ dateOfDeath: '2021-02-01' }})


//Add a new release year to a book
db.books.update({title: "Book0"}, {$push: {releaseYears: 2020}})


//Change the title of a book adding (“New Edition”)
db.books.update({title: "Book0"}, {$set: {title: "New Edition"}})
