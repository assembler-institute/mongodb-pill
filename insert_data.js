// Insert at least 3 authors with the following fields

db.authors.insert({
  name: "Julio",
  lastName: "Verne",
  dateOfBith: "1915-03-21",
  dateOfDeath: "1995-04-18",
  country: "France",
});
db.authors.insert({
  name: "Francesc",
  lastName: "jashjdka",
  dateOfBith: "1958-03-31",
  dateOfDeath: "1999-04-09",
  country: "Spain",
});
db.authors.insert({
  name: "Marius",
  lastName: "sajfna",
  dateOfBith: "1348-03-31",
  dateOfDeath: "1400-04-09",
  country: "Italy",
});

// Insert at least 10 books with the following fields:

db.books.insert({
  title: "title1",
  releaseYear: [2000],
  category: "category1",
  authors: [{ id: "id1", name: "name1", lastName: "lastName1" }],
});
db.books.insert({
  title: "title2",
  releaseYear: [2001],
  category: "category2",
  authors: [{ id: "id2", name: "name2", lastName: "lastName2" }],
});
db.books.insert({
  title: "title3",
  releaseYear: [2002],
  category: "category3",
  authors: [{ id: "id3", name: "name3", lastName: "lastName3" }],
});
db.books.insert({
  title: "title4",
  releaseYear: [2003],
  category: "category4",
  authors: [{ id: "id4", name: "name4", lastName: "lastName4" }],
});
db.books.insert({
  title: "title5",
  releaseYear: [2004],
  category: "category5",
  authors: [{ id: "id5", name: "name5", lastName: "lastName5" }],
});
db.books.insert({
  title: "title6",
  releaseYear: [2005],
  category: "category6",
  authors: [{ id: "id6", name: "name6", lastName: "lastName6" }],
});
db.books.insert({
  title: "title7",
  releaseYear: [2006],
  category: "category7",
  authors: [{ id: "id7", name: "name7", lastName: "lastName7" }],
});
db.books.insert({
  title: "title8",
  releaseYear: [2007],
  category: "category8",
  authors: [{ id: "id8", name: "name8", lastName: "lastName8" }],
});
db.books.insert({
  title: "title9",
  releaseYear: [2008],
  category: "category9",
  authors: [{ id: "id9", name: "name9", lastName: "lastName9" }],
});
db.books.insert({
  title: "title10",
  releaseYear: [2009],
  category: "category10",
  authors: [{ id: "id10", name: "name10", lastName: "lastName10" }],
});
