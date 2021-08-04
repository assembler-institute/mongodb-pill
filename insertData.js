// Insert at least 3 authors
db.authors.insert({
  name: "Jane",
  lastName: "Austen",
  dateOfBirth: ISODate("1775-12-16"),
  dateOfDeath: "1717-07-18",
  country: "England",
});
db.authors.insert({
  name: "Leo",
  lastName: "Tolstoy",
  dateOfBirth: ISODate("1828-09-09"),
  dateOfDeath: "1910-11-20",
  country: "Russia",
});
db.authors.insert({
  name: "Mark",
  lastName: "Twain",
  dateOfBirth: ISODate("1835-11-30"),
  dateOfDeath: "1910-04-21",
  country: "United States",
});

db.authors.insert({
  name: "Michael",
  lastName: "Robotham",
  dateOfBirth: ISODate("1960-11-09"),
  country: "Australia",
});

db.authors.insert({
  name: "Michael",
  lastName: "Connelly",
  dateOfBirth: ISODate("1956-07-21"),
  country: "United States",
});

db.authors.insert({
  name: "Jo",
  lastName: "Connelly",
  dateOfBirth: ISODate("1960-03-29"),
  country: "Norway",
});

// Insert at least 10 books

db.books.insert({
  title: "Northanger Abbey",
  releaseYear: [1814],
  category: "Mystery & Horror",
  authors: [
    {
      id: "1",
      name: "Jane",
      lastName: "Austen",
    },
  ],
});
db.books.insert({
  title: "War and Peace",
  releaseYear: [1865],
  category: "Historical Novel",
  authors: [
    {
      id: "2",
      name: "Leo",
      lastName: "Tolstoy",
    },
  ],
});
db.books.insert({
  title: "Mrs. Dalloway",
  releaseYear: [1925],
  category: "Modernism",
  authors: [
    {
      id: "3",
      name: "Virginia",
      lastName: "Woolf",
    },
  ],
});
db.books.insert({
  title: "Tom Sawyer",
  releaseYear: [1862],
  category: "Adventure",
  authors: [
    {
      id: "4",
      name: "Mark",
      lastName: "Twain",
    },
  ],
});
db.books.insert({
  title: "Nine Dragons",
  releaseYear: [2009],
  category: "Crime Novel",
  authors: [
    {
      id: "5",
      name: "Michael",
      lastName: "Connelly",
    },
  ],
});
db.books.insert({
  title: "Police",
  releaseYear: [2013],
  category: "Crime",
  authors: [
    {
      id: "6",
      name: "Jo",
      lastName: "Nesbø",
    },
  ],
});
db.books.insert({
  title: "Watching You",
  releaseYear: [2013],
  category: "Crime",
  authors: [
    {
      id: "7",
      name: "Michael",
      lastName: "Robotham",
    },
  ],
});
db.books.insert({
  title: "The Woods",
  releaseYear: [2007],
  category: "Crime",
  authors: [
    {
      id: "8",
      name: "Harlan",
      lastName: "Coben",
    },
  ],
});

db.books.insert({
  title: "The Bone Collector",
  releaseYear: [1997],
  category: "Crime",
  authors: [
    {
      id: "9",
      name: "Jeffery",
      lastName: "Deaver",
    },
  ],
});
db.books.insert({
  title: "Red Sparrow",
  releaseYear: [2013],
  category: "Spy",
  authors: [
    {
      id: "10",
      name: "Jason",
      lastName: "Matthews",
    },
  ],
});
