db.authors.update({ name: 'name1' }, {$set: { dateOfDeath: 'anotherDate' } });
db.books.update({ title: 'book10' }, {$push: { releaseYear: 2011 } })
db.books.update({ title: 'book10' }, {$set: { title: 'New Edition' } })