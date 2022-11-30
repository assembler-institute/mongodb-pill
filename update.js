db.authors.update({ name: 'Paulo Coelho' }, { $set: { dateOfDeath: '2022-08-01' } });

db.books.update({ title: 'The Alchemist' }, { $push: { releaseYears: "2014" } })

db.books.update({ title: 'Book9' }, { $set: { title: 'The Alchemist New Edition' } })
