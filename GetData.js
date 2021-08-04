/****************** Get Data ************/

//Select all books
db.books.find().pretty();

// Select all books for a given category
db.books.find({ Catagory: { $eq: "Horror" } }).pretty();

// Select all books published before 2002
db.books.find({ ReleaseYear: { $lt: new Date("2002-01-01") } }).pretty();

// Select all books with more than one author
db.books.find({ $where: "this.authors.length > 1" }).pretty();

// Select all authors
db.authors.find().pretty();

// Select all dead authors
db.authors.find({ Dod: { $ne: "" } }).pretty();

// Select all authors born before 1990
db.authors.find({ Dob: { $lt: new Date("1990-01-01") } }).pretty();

// Select all authors from a given country
db.authors.find({ Country: { $eq: "Argentina" } }).pretty();
