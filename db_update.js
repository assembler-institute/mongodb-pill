// UPDATE DATA


// update dob for one author
db.authors.updateOne({ _id: ObjectId('6319b58922d4d41f0bd52557')}, { $set: { dateOfDeath: new Date('1950-01-21')} })


// update release year for 'war and peace', since it was first released in serialized form
db.books.updateOne({ title: 'War and Peace' }, { $set: { releaseYear: new Date('1865')}})


// update title of book with 'new edition'
db.books.updateOne({ title: 'To Kill a Mockingbird' }, { $set: { title: "To Kill a Mockingbird 60th Anniversary Edition"} })


