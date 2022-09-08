//todo Select all books
db.books.find();

//todo Select all books for a given category
db.books.find({ category: "Fantasy" });

//todo Select all books published before 2002
db.books.find({ releaseYear: { $gt: 2002 } });

//todo Select all books with more than one author
db.books.find({ "authors.1": { $exists: true } });

//todo get all from collection
db.authors.find();

//todo Select all death authors
db.authors.find({ dateOfDeath: { $exists: true } });

//todo Select all authors born before 1990
db.authors.find({ dateOfBirth: { $lt: "1990-1-1" } });

//todo Select all authors from a given country
db.authors.find({ country: "Spain" });
