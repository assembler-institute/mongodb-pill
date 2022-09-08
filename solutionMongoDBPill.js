/*--------------- MONGODB PILL ---------------*/

/*---- Insert data ----*/

//todo Insert at least 3 authors

db.authors.insertMany([
  {
    name: "Christopher",
    lastName: "Paolini",
    dateOfBirth: "1983-11-17",
    country: "EE.UU.",
  },
  {
    name: "Pablo",
    lastName: "Aranda Ruiz",
    dateOfBirth: "1968-4-26",
    dateOfDeath: "2020-8-1",
    country: "Spain",
  },
  {
    name: "Robert",
    lastName: "Jordan",
    dateOfBirth: "1948-10-17",
    dateOfDeath: "2007-9-16",
    country: "EE.UU.",
  },
  {
    name: "Brandon",
    lastName: "Sanderson",
    dateOfBirth: "1975-12-19",
    country: "EE.UU.",
  },
  {
    name: "John Ronald",
    lastName: "Reuel Tolkien",
    dateOfBirth: "1892-1-3",
    dateOfDeath: "1973-9-2",
    country: "South Africa",
  },
  {
    name: "Eiichirō",
    lastName: "Oda",
    dateOfBirth: "1975-1-1",
    country: "Japan",
  },
]);

//todo Insert at least 10 books

db.books.insertMany([
  {
    title: "Eragon",
    releaseYear: [2006],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317e9",
        name: "Christopher",
        lastName: "Paolini",
      },
    ],
  },
  {
    title: "To Sleep in a Sea of Stars",
    releaseYear: [2020],
    category: "SciFy",
    authors: [
      {
        _id: "6319a875c320c4f4114317e9",
        name: "Christopher",
        lastName: "Paolini",
      },
    ],
  },
  {
    title: "El orden improbable",
    releaseYear: [2004],
    category: "Novel",
    authors: [
      {
        _id: "6319a875c320c4f4114317ea",
        name: "Pablo",
        lastName: "Aranda",
      },
    ],
  },
  {
    title: "La distancia",
    releaseYear: [2018],
    category: "Novel",
    authors: [
      {
        _id: "6319a875c320c4f4114317ea",
        name: "Pablo",
        lastName: "Aranda",
      },
    ],
  },
  {
    title: "The Eye of the World",
    releaseYear: [1990],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317eb",
        name: "Robert",
        lastName: "Jordan",
      },
    ],
  },
  {
    title: "The Dragon Reborn",
    releaseYear: [1991],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317eb",
        name: "Robert",
        lastName: "Jordan",
      },
    ],
  },
  {
    title: "The Way of Kings",
    releaseYear: [2010],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ec",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "Rhythm of War",
    releaseYear: [2020],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ec",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "The lord of the rings",
    releaseYear: [1954],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ed",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "The Battle of the Eastern Field",
    releaseYear: [1911],
    category: "Poem",
    authors: [
      {
        _id: "6319a875c320c4f4114317ed",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "One Piece",
    releaseYear: [1997],
    category: "Manga",
    authors: [
      {
        _id: "6319a875c320c4f4114317ee",
        name: "Eiichirō",
        lastName: "Oda",
      },
    ],
  },
]);

/*---- Update data----*/

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

/*---- Get data----*/

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

/*---- Delete data----*/

//todo Eliminate all the books for a given author
db.books.remove({ "authors.name": "Robert" });

//todo Eliminate all the death authors
db.authors.remove({ dateOfDeath: { $exists: true } });
