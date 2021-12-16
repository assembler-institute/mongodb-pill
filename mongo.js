//1. Insert at least 3 authors with the following fields
db.authors.insertMany([
  { name: "Pedro", lastName: "Perez", dateOfBirth: new Date("1975-12-10"), dateOfDeath: new Date("2010-08-16"), country: "EEUU" },
  { name: "Anna", lastName: "Gonzalez", dateOfBirth: new Date("1981-11-15"), dateOfDeath: new Date("2020-02-15"), country: "Spain" },
  { name: "Laura", lastName: "Garcia", dateOfBirth: new Date("1973-03-12"), dateOfDeath: new Date("2015-09-29"), country: "France" },
]);

//2. Insert at least 10 books with the following fields:
db.books.insertMany([
  {
    title: "Poema de Gilgamesh",
    releaseYear: [new Date("2000-12-10")],
    category: "Suspense",
    authors: [
      {
        id: ObjectId("61b9c9d0b1cebb16b339a266"),
        name: "Anna",
        lastName: "Gonzalez",
      },
    ],
  },
  {
    title: "Las mil y una noches",
    releaseYear: [new Date("2015-10-10")],
    category: "Accion",
    authors: [
      {
        id: ObjectId("61b9c9d0b1cebb16b339a265"),
        name: "Pedro",
        lastName: "Perez",
      },
    ],
  },
  { title: "Todo se desmorona", releaseYear: [new Date("2008-1-10")], category: "Comedia", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a266"), name: "Anna", lastName: "Gonzalez" }] },
  { title: "Divina comedia", releaseYear: [new Date("2003-2-10")], category: "Suspense", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a267"), name: "Laura", lastName: "Garcia" }] },
  { title: "Orgullo y prejuicio", releaseYear: [new Date("2014-5-10")], category: "Comedia", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a266"), name: "Anna", lastName: "Gonzalez" }] },
  { title: "Ficciones", releaseYear: [new Date("2018-8-10")], category: "Comedia", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a267"), name: "Laura", lastName: "Garcia" }] },
  { title: "Cumbres Borrascosas", releaseYear: [new Date("2019-7-10")], category: "Suspense", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a266"), name: "Anna", lastName: "Gonzalez" }] },
  { title: "El extranjero", releaseYear: [new Date("2009-8-10")], category: "Accion", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a265"), name: "Pedro", lastName: "Perez" }] },
  { title: "Viaje al fin de la noche", releaseYear: [new Date("2012-6-10")], category: "Suspense", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a267"), name: "Laura", lastName: "Garcia" }] },
  { title: "Nostromo", releaseYear: [new Date("2014-9-10")], category: "Accion", authors: [{ id: ObjectId("61b9c9d0b1cebb16b339a265"), name: "Pedro", lastName: "Perez" }] },
]);

//UPDATE DATA
//Add a date of death to one Author
db.authors.update({ name: "Anna" }, { $set: { dateOfDeath: new Date("2021-10-10") } });
//Add a new release year to a book
db.books.update({ title: "Ficciones" }, { $push: { releaseYear: new Date("2021-10-10") } });
//Change the title of a book adding (“New Edition”)
db.books.update({ title: "Ficciones" }, { $set: { title: "Ficciones New Edition" } });

//GET DATA
//Select all books
db.books.find().pretty();
//Select all books for a given category
db.books.find({ category: "Comedia" }).pretty();
//Select all books published before 2002
db.books.find({ releaseYear: { $lt: ISODate("2002-01-01") } });
//Select all books with more than one author ????
db.books.find({ 'authors.1': { $exists: true } }).pretty()
db.books.find({ $where: "this.authors.length > 1" }).pretty()
//Select all authors
db.authors.find().pretty();
//Select all death authors
db.authors.find({dateOfDeath: {$ne: null}}).pretty();
//Select all authors born before 1990
db.authors.find({dateOfBirth: {$lt: new Date("1990-01-01")}}).pretty();
//Select all authors from a given country
db.authors.find({ country: 'Spain'});

//DELETE DATA
//Eliminate all the books for a given author
db.books.find({'authors.name': 'Pedro'});
db.books.deleteMany({authors: {$elemMatch: {name: 'Anna'}}})
//Eliminate all the death authors
db.authors.find({dateOfDeath: {$ne: null}}).pretty();
db.authors.deleteMany({dateOfDeath: {$ne: null}});
//db.authors.remove({ dateOfDeath: { $exists: true } })

db.books.aggregate([{$group: { countAuthors: { count } }}])
db.books.aggregate({"authors":{ $size: 2 }})
