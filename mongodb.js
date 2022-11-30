// Creating new db
use("Bookshelf");

/** INSERT DATA **/
// Creating the collection authors and inserting 3 of them
// Insert at least 3 authors with the following fields:
// - Name: String
// - Last name: String
// - Date of Birth: Date
// - Date of death: Date
// - Country: String

db.authors.insertMany([
  {
    name: "Neil",
    lastName: "Gaiman",
    dateOfBirth: new Date("1960-11-10"),
    country: "Great Britain",
  },
  //_id:"610a59a9d1c13dff4fd8ced0"
  {
    name: "Terry",
    lastName: "Pratchett",
    dateOfBirth: new Date("1948-04-28"),
    dateOfDeath: new Date("2015-03-12"),
    country: "Great Britain",
  },
  //_id:"610a59a9d1c13dff4fd8ced1"
  {
    name: "Paul",
    lastName: "Auster",
    dateOfBirth: new Date("1947-02-03"),
    country: "United States of America",
  },
  //_id:"610a59dbd1c13dff4fd8ced2"
]);

// Insert at least 10 books with the following fields:
// Title: String
// Release Year: [Date]
// Category: String
// Authors (id, name, lastName): [{id, name, lastName}, … ]

db.books.insertMany([
  {
    title: "The ocean at the end of the Lane",
    releaseYear: 2013,
    category: "magical realism",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced0", name: "Neil", lastName: "Gaiman" },
    ],
  },
  {
    title: "American Gods",
    releaseYear: 2001,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced0", name: "Neil", lastName: "Gaiman" },
    ],
  },
  {
    title: "The Graveyard book",
    releaseYear: 2008,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced0", name: "Neil", lastName: "Gaiman" },
    ],
  },
  {
    title: "Stardust",
    releaseYear: 1999,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced0", name: "Neil", lastName: "Gaiman" },
    ],
  },
  {
    title: "The colour of magic",
    releaseYear: 1983,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced1", name: "Terry", lastName: "Pratchett" },
    ],
  },
  {
    title: "Good omens",
    releaseYear: 1990,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced1", name: "Terry", lastName: "Pratchett" },
      { id: "610a59a9d1c13dff4fd8ced0", name: "Neil", lastName: "Gaiman" },
    ],
  },
  {
    title: "Mort",
    releaseYear: 1987,
    category: "fantasy",
    authors: [
      { id: "610a59a9d1c13dff4fd8ced1", name: "Terry", lastName: "Pratchett" },
    ],
  },
  {
    title: "The Book of Illusions",
    releaseYear: 2002,
    category: "drama",
    authors: [
      { id: "610a59dbd1c13dff4fd8ced2", name: "Paul", lastName: "Auster" },
    ],
  },
  {
    title: "The Brooklyn Follies",
    releaseYear: 2005,
    category: "drama",
    authors: [
      { id: "610a59dbd1c13dff4fd8ced2", name: "Paul", lastName: "Auster" },
    ],
  },
  {
    title: "Leviathan",
    releaseYear: 1992,
    category: "crime",
    authors: [
      { id: "610a59dbd1c13dff4fd8ced2", name: "Paul", lastName: "Auster" },
    ],
  },
]);

/** UPDATE DATA **/
// Add a date of death to one Author
db.authors.updateOne(
  { lastName: "Auster" },
  { $set: { dateOfDeath: new Date() } }
);

// Add a new release year to a book
db.books.updateOne(
  { title: "The colour of magic" },
  { $set: { releaseYear: 1989 } }
);

// Change the title of a book adding (“New Edition”)
db.books.updateOne(
  { title: "American Gods" },
  { $set: { title: "American Gods New Edition" } }
);

/** GET DATA **/
// Select all books
db.books.find().pretty();

// Select all books for a given category
db.books.find({ category: "drama" }).pretty();

// Select all books published before 2002
db.books
  .find({ releaseYear: { $lt: 2002 } })
  .projection({ _id: 0, title: 1 })
  .pretty();

// Select all books with more than one author
db.books
  .find({ authors: { $not: { $size: 1 } } })
  .projection({ _id: 0, title: 1 })
  .pretty();

// Select all authors
db.authors.find().projection({ name: 1, lastName: 1, country: 1 }).pretty();

// Select all death authors
db.authors
  .find({ dateOfDeath: { $exists: true } })
  .projection({ _id: 0, name: 1, dateOfDeath: 1 })
  .pretty();

// Select all authors born before 1990
db.authors
  .find({ dateOfBirth: { $lt: new Date(1990 - 01 - 01) } })
  .projection({ _id: 0, name: 1, dateOfBirth: 1 })
  .pretty();

// Select all authors from a given country
db.authors
  .find({ country: "Great Britain" })
  .projection({ _id: 0, name: 1, lastName: 1, country: 1 })
  .pretty();

/** DELETE DATA **/
// Eliminate all the books for a given author
db.books.deleteMany({ "authors.lastName": "Auster" });

// Eliminate all the dead authors
db.authors.deleteMany({ dateOfDeath: { $exists: true } });
