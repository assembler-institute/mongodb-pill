/* commands for books collection - MongoDB */


/* Inserting data */ 

// authors  //
db.authors.insertMany([
  {
    name: 'Ernest',
    lastName: 'Hemingway',
    dateOfBirth: new Date('1899-07-21'),
    dateOfDeath: new Date('1961-07-02'),
    country: 'USA'
  },
  {
    name: 'Joanne K',
    lastName: 'Rowling',
    dateOfBirth: new Date('31-07-1965'),
    dateOfDeath: null,
    country: 'GB'
  },
  {
    name: 'George',
    lastName: 'Orwell',
    dateOfBirth: new Date('1903-06-25'),
    dateOfDeath: new Date('1950-01-21'),
    country: 'GB'
  },
])

// books // 

db.books.insertMany([
  {
    title: 'To Kill a Mockingbird',
    releaseYear: new Date('1960-07-11'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "Harper",
        lastName: 'Lee'
      }
    ]
  },
  {
    title: 'The Great Gatsby',
    releaseYear: new Date('1925-04-10'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "F. Scott",
        lastName: 'Fitzgerald'
      }
    ]
  },
  {
    title: 'Nineteen Eighty-Four',
    releaseYear: new Date('1949-06-08'),
    category: "Science fiction",
    authors:[
      {
        id: ObjectId(),
        name: "George",
        lastName: 'Orewll'
      }
    ]
  },
  {
    title: 'Anna Karenina',
    releaseYear: new Date('1878-01-01'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "Leo",
        lastName: 'Tolstoy'
      }
    ]
  },
  {
    title: 'The Catcher in the Rye',
    releaseYear: new Date('1951-07-16'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "J.D",
        lastName: 'Salinger'
      }
    ]
  },
  {
    title: 'Catch-22',
    releaseYear: new Date('1961-11-10'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "Joseph",
        lastName: 'Heller'
      }
    ]
  },
  {
    title: 'Moby-Dick',
    releaseYear: new Date('1851-10-18'),
    category: "Nautical fictio",
    authors:[
      {
        id: ObjectId(),
        name: "Herman",
        lastName: 'Melville'
      }
    ]
  },
  {
    title: 'Pride and Prejudice',
    releaseYear: new Date('1813-01-18'),
    category: "Nautical fiction",
    authors:[
      {
        id: ObjectId(),
        name: "Jane",
        lastName: 'Austen'
      }
    ]
  },
  {
    title: 'Crime and Punishment',
    releaseYear: new Date('1866-01-01'),
    category: "Psychological Fiction",
    authors:[
      {
        id: ObjectId(),
        name: "Fyodor",
        lastName: 'Dostoevsky'
      }
    ]
  },
  {
    title: 'The Color Purple',
    releaseYear: new Date('1982-01-01'),
    category: "Novel",
    authors:[
      {
        id: ObjectId(),
        name: "Alice",
        lastName: 'Walker'
      }
    ]
  },
  {
    title: `Harry Potter and the Philosopher's Stone`,
    releaseYear: new Date('1997-06-26'),
    category: "Fantasy Fiction",
    authors:[
      {
        id: ObjectId(),
        name: "Joanne K.",
        lastName: 'Rowling'
      }
    ]
  },
])


