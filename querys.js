use("books");

// 1.5.1 INSERT DATA
// -Insert at least 3 authors with the following fields:
db.authors.insertMany([
  {
    name: "Alvaro",
    lastName: "Merino",
    dateOfBirth: "1959-06-05",
    country: "Spain",
  },
  {
    name: "Miguel",
    lastName: "Perez",
    dateOfBirth: "1958-05-10",
    dateOfDeath: "2021-07-03",
    country: "Spain",
  },
  {
    name: "Pedro",
    lastName: "Gutierrez",
    dateOfBirth: "1999-06-08",
    dateOfDeath: "2021-05-13",
    country: "Germany",
  },
]);

// -Insert at least 10 books with the following fields:
db.books.insertMany([
  {
    title: "Don Quijote",
    releaseYear: "2006",
    category: "fiction",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851929", name: "Pedro", lastName: "Gutierrez" },
    ],
  },
  {
    title: "Oliver Twist",
    releaseYear: "1526",
    category: "fiction",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851928", name: "Miguel", lastName: "Perez" },
    ],
  },
  {
    title: "La regenta",
    releaseYear: "1605",
    category: "commedy",
    authors: {
      _id: "610a66574078a4b734851927",
      name: "Alvaro",
      lastName: "Merino",
    },
  },
  {
    title: "1Q84",
    releaseYear: "1526",
    category: "fiction",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851928", name: "Miguel", lastName: "Perez" },
    ],
  },
  {
    title: "El cuaderno gris",
    releaseYear: "2005",
    category: "fiction",
    authors: {
      _id: "610a66574078a4b734851927",
      name: "Alvaro",
      lastName: "Merino",
    },
  },
  {
    title: "La biblia del hacker",
    releaseYear: "1526",
    category: "drama",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851928", name: "Miguel", lastName: "Perez" },
      { _id: "610a66574078a4b734851929", name: "Pedro", lastName: "Gutierrez" },
    ],
  },
  {
    title: "Harry Potter",
    releaseYear: "2008",
    category: "fiction",
    authors: {
      _id: "610a66574078a4b734851927",
      name: "Alvaro",
      lastName: "Merino",
    },
  },
  {
    title: "El señor de los anillos",
    releaseYear: "1526",
    category: "drama",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851928", name: "Miguel", lastName: "Perez" },
    ],
  },
  {
    title: "La novela de genji",
    releaseYear: "2012",
    category: "commedy",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851929", name: "Pedro", lastName: "Gutierrez" },
    ],
  },
  {
    title: "La metamorfosis",
    releaseYear: "1526",
    category: "fiction",
    authors: [
      { _id: "610a66574078a4b734851927", name: "Alvaro", lastName: "Merino" },
      { _id: "610a66574078a4b734851929", name: "Pedro", lastName: "Gutierrez" },
    ],
  },
]);

// 1.5.2 UPDATE DATA
// -Add a date of death to one Author:
db.authors.update({ name: "Pedro" }, { $set: { dateOfDeath: "01/02/2021" } });

// -Add a new release year to a book:
db.books.update({ title: "1Q84" }, { $set: { releaseYear: "1635" } });

// -Change the title of a book adding (“New Edition”):
db.books.update({ title: "1Q84" }, { $set: { title: "1Q84-New Edition" } });

// 1.5.3 GET DATA
// -Select all books:
db.books.find();

// -Select all books for a given category:
db.books.find({ category: "drama" });

// -Select all books published before 2002:
db.books.find({ releaseYear: { $lt: "2002" } });

// -Select all books with more than one author:
db.books.find({ $where: "this.authors.length > 1" });

// -Select all authors:
db.authors.find();

// Select all death authors:
db.authors.find({ dateOfDeath: { $exists: true } });

// -Select all authors born before 1990:
db.authors.find({ dateOfBirth: { $lt: ISODate("1990-01-01") } });

// -Select all authors from a given country:
db.authors.find({ country: "Spain" });

// 1.5.4 DELETE DATA
// -Eliminate all the books for a given author:
db.books.remove({ "authors.name": "Pedro" });

// -Eliminate all the death authors:
db.authors.deleteMany({ dateOfDeath: { $exists: true } });
