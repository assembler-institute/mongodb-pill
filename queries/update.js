//Add a date of death to one Author, Add a new release year to a book, Change the title of a book adding (“New Edition”)
db.authors.update({ name: 'Pedro' }, { $set: { dateOfDeath: '2021-02-01' } });

db.books.update({ title: 'Cats' }, { $push: { releaseYear: 2005 } })

db.books.update({ title: 'Clean Code' }, { $set: { title: 'Clean Code New Edition' } })