db.authors.update({ name: 'John' }, { $set: { dateOfDeath: '2021-02-01' } });

db.books.update({ title: 'The Hobbit' }, { $set: { releaseYear: 2005 } })

db.books.update({ title: 'The Hobbit' }, { $set: { title: 'The Hobbit New Edition' } })