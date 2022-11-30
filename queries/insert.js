
//Insert at least 3 authors with the following fields = Name: String, Last name: String, Date of Birth: Date, Date of death: Date, Country: String
db.authors.insertMany([
  {
    name: "Pedro",
    lastName: "Lopez",
    dateOfBirth: "1957-12-01",
    dateOfDeath: "2012-03-08",
    country: "Spain",
  },
  {
    name: "Valery",
    lastName: "Bale",
    dateOfBirth: "1985-11-10",
    dateOfDeath: "2011-01-05",
    country: "Andorra",
  },
  {
    name: "Amira",
    lastName: "Cortez",
    dateOfBirth: "1935-08-03",
    dateOfDeath: "1999-05-07",
    country: "Colombia",
  },
]);

//Insert at least 10 books with the following fields: Title: String, Release Year: [Date], Category: String, Authors (id, name, lastName): [{id, name, lastName}, … ]

db.books.insertMany([
  {
    title: "Clean Code",
    releaseYear: [2008],
    category: "tech",
    authors: [
      { id: "61b9da34e99a96c2f1a4754f", name: "Pedro", lastName: "Lopez" },
    ],
  },

  {
    title: "the comedy book",
    releaseYear: [1999],
    category: "Comedy",
    authors: [
      { id: "61b9db15e99a96c2f1a47550", name: "Valery", lastName: "Bale" },
    ],
  },

  {
    title: "Perseverance",
    releaseYear: [2010],
    category: "Mindfulness",
    authors: [
      { id: "61b9db15e99a96c2f1a47551", name: "Amira", lastName: "Cortez" },
    ],
  },

  {
    title: "Teamwork",
    releaseYear: [2003],
    category: "business",
    authors: [
      { id: "61b9da34e99a96c2f1a4754f", name: "Maria", lastName: "valenzuela" },
    ],
  },

  {
    title: "dogs",
    releaseYear: [1987],
    category: "animals",
    authors: [
      { id: "61b9da34e69a96c2f7a4752f", name: "peter", lastName: "King" },
    ],
  },

  {
    title: "Cats",
    releaseYear: [1976],
    category: "animals",
    authors: [
      { id: "61b9da81f99a96c2f1a4756a", name: "Danielle", lastName: "mcAdams" },
    ],
  },

  {
    title: "Drama book",
    releaseYear: [2003],
    category: "Drama",
    authors: [
      { id: "61b9da34e99a96c2r7b4754f", name: "Angela", lastName: "Scott" },
    ],
  },

  {
    title: "Poem book",
    releaseYear: [2008],
    category: "poem",
    authors: [
      { id: "91b9da34e55a96c2f1a4754f", name: "Dylan", lastName: "Disick" },
    ],
  },

  {
    title: "Real war",
    releaseYear: [1988],
    category: "war",
    authors: [
      { id: "61b9da34e99a96c2f1a4754f", name: "Ralph", lastName: "Cox" },
    ],
  },

  {
    title: "Your love",
    releaseYear: [1995],
    category: "Romance",
    authors: [
      { id: "61b4da34e29c96c2f1a4757w", name: "Richard", lastName: "Lawson" },
    ],
  },
]);
