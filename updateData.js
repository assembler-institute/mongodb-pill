//todo Add a date of death to one Author
db.authors.updateOne(
  {
    name: "Cristopher",
  },
  { $set: { dateOfDeath: "2022-9-8" } }
);

//todo Add a new release year to a book
db.books.update(
  { _id: ObjectId("6319a875c320c4f4114317ef") },
  { $push: { releaseYear: 2022 } }
);

//todo Change the title of a book adding (“New Edition”)
db.books.updateOne(
  {
    _id: ObjectId("6319a875c320c4f4114317ef"),
  },
  {
    $set: {
      title: "Eragon New Edition",
    },
  }
);
