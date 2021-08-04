// Add authors, better to use insertMany(), terminal not working
db.authors.insertOne({
  _id: 1,
  name: "Anthony",
  lastName: "Edwards",
  Dob: new Date("1-2-1950"),
  Country: "United States",
});
db.authors.insertOne({
  _id: 2,
  name: "Gustavo",
  lastName: "Sanchez",
  Dob: new Date(" 5-6-1955,"),
  Dod: new Date(" 10-1-2009"),
  Country: "Mexico",
});
db.authors.insertOne({
  _id: 3,
  name: "Ezequiel",
  lastName: "Ferreyra",
  Dob: new Date(" 10-12-1945,"),
  Dod: new Date("11-2-2004"),
  Country: "Argentina",
});

//Add Books
db.books.insertMany([
  {
    Title: "The Wonders of Candy Land",
    ReleaseYear: [new Date("1988-01-12")],
    Catagory: "Fantasy",
    authors: [{ _id: 1, name: "Anthony", lastName: "Edwards" }],
  },
  {
    Title: "The Wolf in The Darkness",
    ReleaseYear: [new Date("1990-03-28")],
    Catagory: "Horror",
    authors: [{ _id: 2, name: "Ezequiel", lastName: "Ferreyra" }],
  },
  {
    Title: "The Lonley Bottle",
    ReleaseYear: [new Date("1987-12-01")],
    Catagory: "Fantasy",
    authors: [{ _id: 3, name: "Gustavo", lastName: "Sanchez" }],
  },
  {
    Title: "Don't come back",
    ReleaseYear: [new Date("1994-04-23")],
    Catagory: "Horror",
    authors: [{ _id: 2, name: "Ezequiel", lastName: "Ferreyra" }],
  },
  {
    Title: "Look At Me Now",
    ReleaseYear: [new Date("1994-01-18")],
    Catagory: "Action and Adventure",
    authors: [{ _id: 1, name: "Anthony", lastName: "Edwards" }],
  },
  {
    Title: "The Ultimate Fighter",
    ReleaseYear: [new Date("1991-06-12")],
    Catagory: "Action and Adventure",
    authors: [{ _id: 3, name: "Gustavo", lastName: "Sanchez" }],
  },
  {
    Title: "Darkness At Sunrise",
    ReleaseYear: [new Date("1994-08-01")],
    Catagory: "Horror",
    authors: [{ _id: 2, name: "Ezequiel", lastName: "Ferreyra" }],
  },
  {
    Title: "Dark Secrets of Candy Land",
    ReleaseYear: [new Date("1998-01-12")],
    Catagory: "Fantasy",
    authors: [{ _id: 1, name: "Anthony", lastName: "Edwards" }],
  },
  {
    Title: "Try to Stop Me",
    ReleaseYear: [new Date("2000-02-01")],
    Catagory: "Action and Adventure",
    authors: [{ _id: 2, name: "Ezequiel", lastName: "Ferreyra" }],
  },
  {
    Title: "Last Darkness",
    ReleaseYear: [new Date("2000-02-01")],
    Catagory: "Horror",
    authors: [{ _id: 3, name: "Gustavo", lastName: "Sanchez" }],
  },
]);
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

/****************** Get Data ************/

//Select all books
db.books.find().pretty();

// Select all books for a given category
db.books.find({Catagory: {$eq: "Horror"}}).pretty();

// Select all books published before 2002
db.books.find({ReleaseYear: {$lt:new Date("2002-01-01")}}).pretty();

// Select all books with more than one author
db.books.find({$where: "this.authors.length > 1"}).pretty();

// Select all authors
db.authors.find().pretty();

// Select all dead authors
db.authors.find({Dod: {$ne: ""}} ).pretty();

// Select all authors born before 1990
db.authors.find({Dob: {$lt:new Date("1990-01-01")}}).pretty();

// Select all authors from a given country
db.authors.find({Country: {$eq: "Argentina"}}).pretty();


/****************** Delete Data ************/

//Eliminate all the books for a given author
db.books.deleteMany({"authors.name": {$in: ["Anthony"]}});

// Eliminate all the death authors
db.authors.deleteMany({Dod: {$ne: ""}});

