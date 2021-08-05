// Add a date of death to one Author

db.authors.update({ name: "Julio" }, { $set: { dateOfDeath: "1991-03-33" } });

// Add a new release year to a book

db.books.update({ title: "title1" }, { $push: { releaseYear: 2020 } });

// Change the title of a book adding (“New Edition”)

db.books.update({ title: "title1" }, { $set: { title: "title1NewEdition" } });
