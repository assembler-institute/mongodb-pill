db.authors.update({ name: 'Name' }, { $set: { dateOfDeath: 'XXXX-XX-XX' } });

db.books.update({ title: 'BookTitle' }, { $push: { releaseYears: XXXX } })

db.books.update({ title: 'BookTitle' }, { $set: { title: 'NewBookTitle' } })