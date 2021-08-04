// Select all books

db.books.find({});

// Select all books for a given category

db.books.find({ category: "category6" });

// Select all books published before 2002

db.books.find({ releaseYear: { $lt: 2002 } });

// Select all books with more than one author

db.books.find({ "authors.1": { $exists: true } });

// Select all authors

db.authors.find({});

// Select all death authors

db.authors.find({ dateOfDeath: { $exists: true } });

// Select all authors born before 1990

db.authors.find({ dateOfBith: { $lt: ISOdate("1990-01-01") } });

// Select all authors from a given country

db.authors.find({ country: "France" });
