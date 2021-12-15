//!INSERT DATA

//TODO create authors Collection
db.authors.insertMany([
  {
    name: "John Ronald",
    lastName: "Reuel Tolkien",
    dateOfBirth: "1892-1-3",
    dateOfDeath: "1973-9-2",
    country: "Bloemfointein",
  },
  {
    name: "Brandon",
    lastName: "Sanderson",
    dateOfBirth: "1975-12-19",
    country: "EE.UU.",
  },
  {
    name: "Patrick",
    lastName: "Rothfuss",
    dateOfBirth: "1973-6-6",
    country: "EE.UU.",
  },
  {
    name: "Andrzej",
    lastName: "Sapkowski",
    dateOfBirth: "1948-6-21",
    country: "Poland",
  },
  {
    name: "Abraham",
    lastName: "Stoker",
    dateOfBirth: "1847-11-8",
    dateOfDeath: "1912-4-20",
    country: "Ireland",
  },
  {
    name: "Mary",
    lastName: "Shelley",
    dateOfBirth: "1797-8-30",
    dateOfDeath: "1851-2-1",
    country: "England",
  },
]);

//todo create authors Collection
db.books.insertMany([
  {
    title: "The lord of the rings",
    relaseYear: [1954],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d8",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "The Silmarillion",
    relaseYear: [1977],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d8",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "The way of the kings",
    relaseYear: [2010],
    category: "SciFy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d9",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "Words of Radiance",
    relaseYear: [2014],
    category: "SciFy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d9",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "Oathbringer",
    relaseYear: [2017],
    category: "SciFy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d9",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "Rhythm of War",
    relaseYear: [2020],
    category: "SciFy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49d9",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "The Name of the Wind",
    relaseYear: [2007],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49da",
        name: "Patrick",
        lastName: "Rothfuss",
      },
    ],
  },
  {
    title: "The Wise Man's Fear",
    relaseYear: [2011],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49da",
        name: "Patrick",
        lastName: "Rothfuss",
      },
    ],
  },
  {
    title: "The Doors of Stone",
    relaseYear: [2023],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49da",
        name: "Patrick",
        lastName: "Rothfuss",
      },
    ],
  },
  {
    title: "Geralt de Rivia Saga",
    relaseYear: [1992, 1993, 1994, 1995, 1996, 1997, 1999, 2000, 2013],
    category: "Fantasy",
    authors: [
      {
        _id: "61b9d1d876a92c7cd5aa49db",
        name: "Andrzej",
        lastName: "Sapkowski",
      },
    ],
  },
  {
    title: "Dracula",
    relaseYear: [1897],
    category: "Terror",
    authors: [
      { _id: "61b9d1d876a92c7cd5aa49dc", name: "Abraham", lastName: "Stoker" },
    ],
  },
  {
    title: "Frankenstein",
    relaseYear: [1818],
    category: "Terror",
    authors: [
      { _id: "61b9d1d876a92c7cd5aa49dd", name: "Mary", lastName: "Shelley" },
    ],
  },
]);

//!UPDATE DATA

//todo Insert new property
db.authors.updateOne(
  {
    name: "Patrick",
  },
  { $set: { dateOfDeath: "2021-12-13" } }
);

//todo Insert new element to array
db.books.update(
  { _id: ObjectId("61b9dae376a92c7cd5aa49de") },
  { $push: { relaseYear: 2022 } }
);

//todo Overwrite property
db.books.updateOne(
  {
    _id: ObjectId("61b9dae376a92c7cd5aa49de"),
  },
  {
    $set: {
      title: "The lord of the rings 'New Edition'",
    },
  }
);

//!GET DATA

//todo get all from collection
db.books.find().pretty();

//todo get all from collection with a prop.
db.books.find({ category: "Terror" }).pretty();

//todo get all from collection with a prop. greater than value
db.books.find({ relaseYear: { $gt: 2002 } }).pretty();

//todo get all from collection with a prop. with more than one array value
db.books.find({ $where: "this.relaseYear.length > 1" }).pretty();

//todo get all from collection
db.authors.find().pretty();

//todo get all from collection who has a specific prop.
db.authors.find({ dateOfDeath: { $exists: true } }).pretty();

//todo get all from collection with a prop. lesser than value
db.authors.find({ dateOfBirth: { $lt: "1900-1-1" } }).pretty();

//todo get all from collection with a specific prop.
db.authors.find({ country: "EE.UU." }).pretty();

//!DELETE DATA

//todo delete all from collection with a prop.object with a specific prop value.
db.books.deleteMany({
  authors: { $elemMatch: { _id: "61b9d1d876a92c7cd5aa49dd" } },
});

//todo delete all from collection with a specific prop.
db.authors.deleteMany({ dateOfDeath: { $exists: true } });
