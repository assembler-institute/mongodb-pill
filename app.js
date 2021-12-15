const mongoose = require("mongoose")
const authors = require("./src/models/authorModel.js")
const books = require("./src/models/bookModel.js")
console.log("hi!");
mongoose.connect("mongodb://localhost:27017/books")

// run("John", "Doe", "1970/01/12", "2020/01/30", "USA");
// run("Jane", "Doe", "01/01/1970", "01/01/2020", "USA");
// run("Edgar", "Poe", "01/01/1970", "01/01/2020", "USA");
// run("William", "Shakespeare", "01/01/1564", "01/01/1616", "England");
// run("Charles", "Dickens", "01/01/1812", "01/01/1870", "England");
// run("Lewis", "Carroll", "01/01/1832", "01/01/1899", "England");
// run("Gabriel", "Garcia Marquez", "01/01/1899", "01/01/1962", "Colombia");
// run("Jorge", "Luis Borges", "01/01/1899", "01/01/1940", "Argentina");
// run("Haruki", "Murakami", "01/01/1965", "01/01/2020", "Japan");
// run("J.K.", "Rowling", "01/01/1965", "01/01/2020", "England");
// run("Mo", "Khalil", "01/01/1970", "01/01/2020", "USA");
// run("Gustavo", "Fonseca", "1970/01/12", "2020/01/03", "Brazil");

// async function run(name, lastName, dateOfBirth, dateOfDeath, country) {
//     const author = await authors.create({ name: name, lastName: lastName, dateOfBirth, dateOfDeath: dateOfDeath, country: country })
//     console.log(author);
//     author.save();
// }

// addBook("The Lord of the Rings", "1954", "Fantasy", [
//     "61ba3132e1560ff6ff3dfcc4", "61ba3145b540d0e606414d56", "61ba315d76e8f6849029c90a"]);
//  addBook("The Hobbit", "1937", "Fantasy", ["61ba3132e1560ff6ff3dfcc4", "61ba3132e1560ff6ff3dfcc4", "61ba3132e1560ff6ff3dfcc4"]);
// addBook("The Catcher in the Rye", "1951", "Fantasy", [7, 8, 9]);
// addBook("The Great Gatsby", "1925", "Fantasy", [10, 11, 12]);
// addBook("The Grapes of Wrath", "1940", "Fantasy", [13, 14, 15]);
// addBook("Atlas Shrugged", "1957", "Fantasy", [1, 2, 3]);
// addBook("Cien años de soledad", "1952", "Fantasy", [1, 2, 3]);
// addBook("El amor en los tiempos del cólera", "1956", "Love", [4, 5, 6]);
// addBook("Don Quijote de la Mancha", "1605", "Fantasy", [1, 2, 3]);
// addBook("Zorro", "1937", "Action", [1, 2, 3]);
// addBook("Progreso", "1937", "Sci-Fi", [1, 2, 3]);


async function addBook(title, releaseYear, category, authors) {
    const book = await books.create({ title: title, releaseYear: releaseYear, category: category, authors: authors })
    book.save();
}

async function updateAuthor(name, dateOfDeath) {
    await authors.findOneAndUpdate({ name: name }, { dateOfDeath: dateOfDeath })
    const author = await authors.findOne({ name: name })
    // console.log(author.name);
    // console.log(author.dateOfDeath);
}

// updateAuthor("Gustavo", "1992/03/04");

async function updateBook(title, releaseYear, newTitle) {
    console.log(books.findOne({ title: newTitle }))
    await books.findOneAndUpdate({ title: title, title: newTitle })
    await books.findOneAndUpdate({ title: newTitle, releaseYear: releaseYear })
    const book = await books.findOne({ title: newTitle })
    // console.log(book.title);
    // console.log(book.releaseYear);
}

// updateBook("The Lord of the Rings", "1966", "The Lord of the Rings: The Return of the King");


async function getAllBooks() {
    await books.find({}).then(function (books) {
        // console.log(books);
    })
}

// getAllBooks();



// Select all books for a given category
async function getBooksByCategory(category) {
    await books.find({ category: category }).then(function (books) {
        // console.log(books);
    })
}

// getBooksByCategory("Fantasy");

// Select all books published before 2002
async function getBooksBefore2002() {
    await books.find({ releaseYear: { $lt: 2002 } }).then(function (books) {
        // console.log(books);
    })
}


// getBooksBefore2002();

// Select all books with more than one author
async function getBooksWithMoreThanOneAuthor() {
    {
        await books.find({}).then(function (books) {
            books.forEach(function (book) {
                if (book.authors.length > 1) {
                    console.log(book.title);
                }
            })
        })
    }
}


// getBooksWithMoreThanOneAuthor();

// Select all authors
async function getAllAuthors() {
    await authors.find({}).then(function (authors) {
        // console.log(authors);
    })
}

// getAllAuthors();

// Select all dead authors
async function getDeadAuthors() {
    await authors.find({}).then(function (authors) {
        authors.forEach(function (author) {
            if (author.dateOfDeath) {
                console.log(author.name);
            }
            // console.log(authors);
        })
    }
    )
}

// getDeadAuthors();

// Select all authors born before 1990

async function getAuthorsBornBefore1990() {
    await authors.find({ dateOfBirth: { $lt: "1990-01-01" } }).then(function (authors) {
        // console.log(authors);
    })
}

// getAuthorsBornBefore1990();


//Select all authors from a given country
async function getAuthorsFromCountry(country) {
    await authors.find({ country: country }).then(function (authors) {
        console.log(authors);
    })
}

// getAuthorsFromCountry("USA");


// Eliminate all the books for a given author

async function eliminateBooks(name) {
    await authors.findOneAndUpdate({ name: name }, { $set: { books: [] } })
    const author = await authors.findOne({ name: name })
    console.log(author.name);
    console.log(author.books);
}

// eliminateBooks("John");
