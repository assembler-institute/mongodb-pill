// Eliminate all the books for a given author

db.books.deleteOne({ name: "name5" });

// Eliminate all the death authors

db.authors.remove({ dateOfDeath: { $exists: true } });
