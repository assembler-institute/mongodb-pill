//** Insert data queries*/
//**----------------------------------------------------------------*/
// Insert an author with the following fields:
//    - Name: String
//    - Last name: String
//    - Date of Birth: Date
//    - Date of death: Date
//    - Country: String
db.authors.insertOne({
  _id: "AJ19500804",
  name: "Alex",
  lastName: "Jones",
  birthDate: new Date("1950-08-04"),
  deathDate: new Date("2020-12-15"),
  country: "United States",
});

db.authors.insertMany([
  {
    _id: "MG19701103",
    name: "Mark",
    lastName: "Grayson",
    birthDate: new Date("1970-11-03"),
    deathDate: new Date("2040-12-15"),
    country: "Canada",
  },
  {
    _id: "HM19550110",
    name: "Hannah",
    lastName: "Mikaelson",
    birthDate: new Date("1955-01-10"),
    deathDate: new Date("2037-03-11"),
    country: "England",
  },
]);

// Insert a book with the following fields:
//    - Title: String
//    - Release Year: [Date]
//    - Category: String
//    - Authors (id, name, lastName): [{id, name, lastName}, … ]

db.books.insertMany([
  {
    title: "Invincible: Viltrumite war",
    releaseYear: [new Date("2000-01-10")],
    category: "science-fiction",
    authors: [{ id: "MG19701103", name: "Mark", lastName: "Grayson" }],
  },
  {
    title: "The Originals",
    releaseYear: [new Date("1980-03-10")],
    category: "romance",
    authors: [{ id: "HM19550110", name: "Hannah", lastName: "Mikaelson" }],
  },
  {
    title: "The Infinite Loop",
    releaseYear: [new Date("1980-01-10")],
    category: "science-fiction",
    authors: [
      { id: "AJ19500804", name: "Alex", lastName: "Jones" },
      { id: "HM19550110", name: "Hannah", lastName: "Mikaelson" },
    ],
  },
  {
    title: "Trapped in the dark",
    releaseYear: [new Date("1995-01-10")],
    category: "thriller",
    authors: [{ id: "MG19701103", name: "Mark", lastName: "Grayson" }],
  },
  {
    title: "Valhalla",
    releaseYear: [new Date("2000-04-10")],
    category: "mythology",
    authors: [{ id: "AJ19500804", name: "Alex", lastName: "Jones" }],
  },
  {
    title: "Mischievous 7",
    releaseYear: [new Date("1997-11-10")],
    category: "drama",
    authors: [
      { id: "AJ19500804", name: "Alex", lastName: "Jones" },
      { id: "HM19550110", name: "Hannah", lastName: "Mikaelson" },
    ],
  },
  {
    title: "Invincible: dimensional war",
    releaseYear: [new Date("2005-05-15")],
    category: "science-fiction",
    authors: [{ id: "MG19701103", name: "Mark", lastName: "Grayson" }],
  },
  {
    title: "Shallow shore",
    releaseYear: [new Date("2007-01-10")],
    category: "thriller",
    authors: [{ id: "HM19550110", name: "Hannah", lastName: "Mikaelson" }],
  },
  {
    title: "Volt 64",
    releaseYear: [new Date("2000-10-10")],
    category: "action",
    authors: [{ id: "MG19701103", name: "Mark", lastName: "Grayson" }],
  },
  {
    title: "Reflections of the lost drifter",
    releaseYear: [new Date("1990-01-10")],
    category: "philosophy",
    authors: [
      { id: "AJ19500804", name: "Alex", lastName: "Jones" },
      { id: "HM19550110", name: "Hannah", lastName: "Mikaelson" },
    ],
  },
]);

//** Update data queries*/
//**----------------------------------------------------------------*/
// Add a date of death to one Author
db.authors.updateOne(
  { name: "Alex" },
  { $set: { deathDate: new Date("2027-06-20") } }
);

// Add a new release year to a book
db.books.updateOne(
  { title: "Volt 64" },
  { $push: { releaseYear: new Date("2001-06-20") } }
);

// Change the title of a book adding (“New Edition”)
db.books.updateOne(
  { title: "Invincible: dimensional war" },
  [{ $set: { title: { $concat: ["$title", " New edition"] } } }],
  { multi: true }
);

//** Get data queries*/
//**----------------------------------------------------------------*/
// Select all books
db.books.find({}).pretty();

// Select all books for a given Category
db.books.find({ category: "science-fiction" }).pretty();

// Select all books published before 2002
db.books.find({ releaseYear: { $lt: new Date("2002-01-01") } }).pretty();

// Select all books with more than one author
db.books.find({ $where: "this.authors.length > 1" }).pretty();

// Select all authors
db.authors.find({}).pretty();

// Select all dead authors
db.authors.find({ deathDate: { $ne: "" } }).pretty();

// Select all authors born before 1990
db.authors.find({ birthDate: { $lt: new Date("1990-01-01") } }).pretty();

// Select all authors from a given country
db.authors.find({ country: "Canada" }).pretty();

//** Delete data queries*/
//**----------------------------------------------------------------*/
// Eliminate all the books for a given author
db.books.deleteMany({"authors.id": {$in: ["MG19701103"]}});

// Eliminate all the dead authors
db.authors.deleteMany({ deathDate: { $ne: "" }});