// Add a date of death to one Author
db.authors.update({ name: "Jane" }, { $set: { dateOfDeath: "1817-07-18" } });
// Add a new release year to a book
db.books.update({ title: "Nine Dragons" }, { $push: { releaseYear: 2010 } });
// Change the title of a book adding (“New Edition”)
db.books.update({ title: "Police" }, { $set: { title: "Police New Edition" } });
