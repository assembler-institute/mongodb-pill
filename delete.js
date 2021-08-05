db.books.remove({"author.name": "name1"})

db.authors.remove({ dateOfDeath: { $exists: true } })