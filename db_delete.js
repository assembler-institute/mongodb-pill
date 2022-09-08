
// DELETE DATA


// eliminate all the books for a given author, in this case using id
db.books.deleteMany({ "authors.id": 2 })


// eliminate all the dead authors
db.authors.deleteMany({ dateOfDeath: { $lt: new Date() }});
db.authors.deleteMany({ dateOfDeath: { $exists: true }})



