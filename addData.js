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
