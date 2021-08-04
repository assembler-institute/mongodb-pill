/****************** Update ************/

//Add a date of death to one Author

db.authors.updateOne({ name: "Anthony" }, { $set: { Dod: new Date() } });

//Add a new release year to a book
db.books.updateOne(
  { Title: "Darkness At Sunrise" },
  { $push: { ReleaseYear: new Date("2010-12-12") } }
);

//Change the title of a book adding (“New Edition”)
db.books.updateOne(
  { Title: "The Ultimate Fighter" },
  [{ $set: { Title: { $concat: ["$Title", " New Edition"] } } }],
  { multi: true }
);
