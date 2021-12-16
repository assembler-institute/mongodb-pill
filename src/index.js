const mongoose = require("mongoose")
const authors = require("./models/authorModel")
const books = require("./models/bookModel.js")
mongoose.connect("mongodb://localhost:27017/books")
const queries = require("./queries.js")


// Add authors
// queries.addAuthor("John", "Doe", "1970/01/12", "", "USA");
// queries.addAuthor("Jane", "Doe", "1800-01-01", "1992-01-01", "USA");
// queries.addAuthor("Edgar", "Poe", "1801-01-01", "1970-01-01", "USA");


// Add books
// queries.addBook("The Lord of the Rings", "1954", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ad79a84d443ad4c9327", "61ba315d76e8f6849029c90a"]);
// queries.addBook("The Hobbit", "1937", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ad79a84d443ad4c9327", "61ba3132e1560ff6ff3dfcc4"]);
// queries.addBook("The Catcher in the Rye", "1951", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ad79a84d443ad4c9327", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("The Great Gatsby", "1925", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("The Grapes of Wrath", "1940", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("Atlas Shrugged", "1957", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("Cien años de soledad", "1952", "Fantasy", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("El amor en los tiempos del cólera", "1956", "Love", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);
// queries.addBook("Don Quijote de la Mancha", "1605", "Fantasy", ["61ba6ab56afe61113bc69ac3"]);
// queries.addBook("Zorro", "1937", "Action", ["61ba6ab56afe61113bc69ac3", "61ba6ae05effb1b59aea7239"]);

// Add a date of death to one Author
// queries.updateAuthor("Jane", "1993-01-01");

//Update book

// queries.updateBook("The Lord of the Rings", "1966");


//get all books

// queries.getAllBooks();


//get books from a given category

// queries.getBooksByCategory("Fantasy");

// // Select all books published before 2002
// queries.getBooksBefore2002();

//Get books with more than one author
// queries.getBooksWithMoreThanOneAuthor();

// // Select all authors
// queries.getAllAuthors();

// // Select all dead authors
// queries.getDeadAuthors();


// // Select all authors born before 1990
// queries.getAuthorsBornBefore1990();


// //Select all authors from a given country
// queries.getAuthorsFromCountry("USA");


// // Eliminate all the books for a given author
// queries.eliminateBooks("Jane");


