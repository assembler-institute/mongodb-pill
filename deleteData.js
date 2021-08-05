// Eliminate all the books for a given author
db.books.remove({ authors: { $elemMatch: { name: "Leo" } } });

// Eliminate all the death authors
db.authors.remove({ dateOfDeath: { $exists: true } });
