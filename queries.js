// Remove property from author
db.authors.updateOne({ Name: "Josua" }, { $unset: { Date_of_death: "" } });

// update author data
db.authors.updateOne(
  { Name: "Josua" },
  { $set: { Date_of_death: ISODate("2040-03-01") } }
);

// Change the book title
db.books.updateOne(
  { _id: ObjectId("610aae964834882d3895bdf7") },
  { $set: { Title: "El fin del espacio" } }
);

// Select all books
db.books.find({}).pretty();

// Select all books with chosen category
db.books.find({ Category: "Historia" }).pretty();

// Select all books with earlier release date
db.books.find({ Release_Year: { $lt: ISODate("2002-01-01T00:00:00Z") } }).pretty();

// Select all books with more than 1 author
db.books.find({ $where: "this.Authors.length > 1" }).count();

// Select all authors
db.authors.find({}).pretty();

// Select all authors that will die before salected date
db.authors.find({ Date_of_death: { $lt: ISODate("2031-01-01T00:00:00Z") } }).count();

// Select all authors that will die before salected date
db.authors.find({ Date_of_Birth: { $lt: ISODate("1990-01-01T00:00:00Z") } }).count();

// Delte all books of specific author
db.books.deleteMany({"Authors.Name":"Json"});

// Delte all Authors already deaths.
db.authors.deleteMany({Date_of_death: { $lt: ISODate("2021-01-01T00:00:00Z") }})

