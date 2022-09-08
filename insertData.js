//todo Insert at least 3 authors

db.authors.insertMany([
  {
    name: "Christopher",
    lastName: "Paolini",
    dateOfBirth: "1983-11-17",
    country: "EE.UU.",
  },
  {
    name: "Pablo",
    lastName: "Aranda Ruiz",
    dateOfBirth: "1968-4-26",
    dateOfDeath: "2020-8-1",
    country: "Spain",
  },
  {
    name: "Robert",
    lastName: "Jordan",
    dateOfBirth: "1948-10-17",
    dateOfDeath: "2007-9-16",
    country: "EE.UU.",
  },
  {
    name: "Brandon",
    lastName: "Sanderson",
    dateOfBirth: "1975-12-19",
    country: "EE.UU.",
  },
  {
    name: "John Ronald",
    lastName: "Reuel Tolkien",
    dateOfBirth: "1892-1-3",
    dateOfDeath: "1973-9-2",
    country: "South Africa",
  },
  {
    name: "Eiichirō",
    lastName: "Oda",
    dateOfBirth: "1975-1-1",
    country: "Japan",
  },
]);

//todo Insert at least 10 books

db.books.insertMany([
  {
    title: "Eragon",
    releaseYear: [2006],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317e9",
        name: "Christopher",
        lastName: "Paolini",
      },
    ],
  },
  {
    title: "To Sleep in a Sea of Stars",
    releaseYear: [2020],
    category: "SciFy",
    authors: [
      {
        _id: "6319a875c320c4f4114317e9",
        name: "Christopher",
        lastName: "Paolini",
      },
    ],
  },
  {
    title: "El orden improbable",
    releaseYear: [2004],
    category: "Novel",
    authors: [
      {
        _id: "6319a875c320c4f4114317ea",
        name: "Pablo",
        lastName: "Aranda",
      },
    ],
  },
  {
    title: "La distancia",
    releaseYear: [2018],
    category: "Novel",
    authors: [
      {
        _id: "6319a875c320c4f4114317ea",
        name: "Pablo",
        lastName: "Aranda",
      },
    ],
  },
  {
    title: "The Eye of the World",
    releaseYear: [1990],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317eb",
        name: "Robert",
        lastName: "Jordan",
      },
    ],
  },
  {
    title: "The Dragon Reborn",
    releaseYear: [1991],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317eb",
        name: "Robert",
        lastName: "Jordan",
      },
    ],
  },
  {
    title: "The Way of Kings",
    releaseYear: [2010],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ec",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "Rhythm of War",
    releaseYear: [2020],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ec",
        name: "Brandon",
        lastName: "Sanderson",
      },
    ],
  },
  {
    title: "The lord of the rings",
    releaseYear: [1954],
    category: "Fantasy",
    authors: [
      {
        _id: "6319a875c320c4f4114317ed",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "The Battle of the Eastern Field",
    releaseYear: [1911],
    category: "Poem",
    authors: [
      {
        _id: "6319a875c320c4f4114317ed",
        name: "John Ronald",
        lastName: "Reuel Tolkien",
      },
    ],
  },
  {
    title: "One Piece",
    releaseYear: [1997],
    category: "Manga",
    authors: [
      {
        _id: "6319a875c320c4f4114317ee",
        name: "Eiichirō",
        lastName: "Oda",
      },
    ],
  },
]);
