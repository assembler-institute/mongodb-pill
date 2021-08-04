// Select the database to use.
use("books");

// Insert authors

db.authors.insertMany([
  {
    name: "Jerome David",
    last_name: "Salinger",
    dob: new Date("1919-01-01"),
    dod: new Date("2010-01-27"),
    country: "United States of America",
  },
  {
    name: "Chuck",
    last_name: "Palahniuk",
    dob: new Date("1962-02-21"),
    country: "United States of America",
  },
  {
    name: "Pere",
    last_name: "Calders",
    dob: new Date("1912-09-29"),
    dod: new Date("1994-07-21"),
    country: "Catalunya",
  },
]);

// Insert books
db.books.insertMany([
  {
    title: "The Catcher in the Rye",
    releaseYear: [1951],
    category: "Realism",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Nine Stories",
    releaseYear: [1953],
    category: "Short stories",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Seymour: An Introduction",
    releaseYear: [1959],
    category: "Realism",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Franny & Zooey",
    releaseYear: [1961],
    category: "Thriller",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Fight Club",
    releaseYear: [1996],
    category: "Thriller",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Diary",
    releaseYear: [2003],
    category: "Dirty realism",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Doomed",
    releaseYear: [2013],
    category: "Psycological thriller",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Adjustment Day",
    releaseYear: [2018],
    category: "Realism",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "L'ombra de l'atzavara",
    releaseYear: [1963],
    category: "Fantasy",
    authors: [{ id: "3", name: "Pere", last_name: "Calders" }],
  },
  {
    title: "La lluna a casa i altres contes",
    releaseYear: [1995],
    category: "Fantasy",
    authors: [{ id: "3", name: "Pere", last_name: "Calders" }],
  },
]);

/* -------------------------------------------------------------------------- */
/*                                   UPDATE                                   */
/* -------------------------------------------------------------------------- */

// Add a date of death to one author
db.authors.find({ name: "Pere" });
db.authors.updateOne(
  { name: "Pere" },
  { $set: { dod: new Date("1994-07-26") } }
);

// ???? Add new release year to book
db.books.find({ title: "The Catcher in the Rye" }, { releaseYear: 1 }).pretty();
db.books.updateOne(
  { title: "The Catcher in the Rye" },
  { $set: { releaseYear: new Date("1952-01-01") } }
);
// { $year: { date: new Date("Jan 7, 2003") } }

// Add "New edition" to book title
db.books.find({ title: "The Catcher in the Rye" }, { title: 1 }).pretty();
db.books.updateOne(
  { title: "The Catcher in the Rye" },
  { $set: { title: "The Catcher in the Rye | New edition" } }
);

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */

// Select all books (Title, author name, author last_name)
db.books
  .find({}, { title: 1, "authors.name": 1, "authors.last_name": 1, _id: 0 })
  .pretty();

// Select all books from category
db.books.find({ category: "Thriller" }, { title: 1, _id: 0 }).pretty();

// Select all books published before 2002
db.books.find({ releaseYear: { $gt: 2002 } }, { title: 1, _id: 0 }).pretty();

// Select all books with more than one author
// db.books.find({authors:{$size:2}}, {title: 1, _id:0, })
// db.books.find({$expr:{$gt:[{$size:"$authors"}, 0]}})
db.books.find({ $where: "this.authors.length > 1" }, { title: 1, _id: 0 });

// Select all authors
db.authors.find({}, { name: 1, _id: 0 }).pretty();

// Select all death authors
db.authors.find({ dod: { $exists: true } }, { name: 1, _id: 0 }).pretty();

// Select all authors born before 1990
db.authors
  .find({ dob: { $lt: new Date("1990-01-01") } }, { name: 1, _id: 0 })
  .pretty();

// Select all authors from a given country (not from USA)
db.authors
  .find(
    { country: { $ne: "United States of America" } },
    { name: 1, _id: 0, country: 1 }
  )
  .pretty();

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */

// Delete all books from given author
db.books.deleteMany({ "authors.name": "Jerome David" });

// Eliminate all death autors
db.authors.deleteMany({ dod: { $exists: true } });
