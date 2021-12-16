const mongoose = require("mongoose")
const authors = require("./models/authorModel")
const books = require("./models/bookModel.js")
mongoose.connect("mongodb://localhost:27017/books")



async function includes(collection, name) {
    if (collection = "authors") {
        const author = await authors.findOne({ name: name })
        if (author) {
            console.log(`${author.name} already exists`);
            return true;
        }
    }
}
async function includesBook(title) {
    const book = await books.findOne({ title: title })
    console.log(book);
    if (book) {
        console.log(`${book.title} already exists`);
        return true;
    }
}


async function addAuthor(name, lastName, dateOfBirth, dateOfDeath = "", country) {

    if (!await includes("authors", name)) {
        const author = await authors.create({ name: name, lastName: lastName, dateOfBirth: dateOfBirth, dateOfDeath: dateOfDeath, country: country })
        console.log(author);
        author.save();

    }
}

async function addBook(title, releaseYear, category, authors) {
    if (!await includesBook(title)) {
        const book = await books.create({ title: title, releaseYear: releaseYear, category: category, authors: authors })
        book.save();
    }
}

async function updateAuthor(name, dateOfDeath) {
    await authors.findOneAndUpdate({ name: name }, { dateOfDeath: dateOfDeath })
    const author = await authors.findOne({ name: name })
    console.log(author.name);
    console.log(author.dateOfDeath);
}


async function updateBook(title, releaseYear) {
    newTitle = title + " New Edition"
    console.log(`Old Title: ${title}`);
    await books.findOneAndUpdate({ title: title, title: newTitle })
    await books.findOneAndUpdate({ title: newTitle, releaseYear: releaseYear })
    const book = await books.findOne({ title: newTitle })
    console.log(`New Title: ${book.title}`);
    console.log(book.releaseYear);
}




async function getAllBooks() {
    await books.find({}).then(function (books) {
        console.log(books);
    })
}

// Select all books for a given category
async function getBooksByCategory(category) {
    await books.find({ category: category }).then(function (books) {
        console.log(books);
    })
}

// Select all books published before 2002
async function getBooksBefore2002() {
    await books.find({ releaseYear: { $lt: 2002 } }).then(function (books) {
        console.log(books);
    })
}

// Select all books with more than one author
async function getBooksWithMoreThanOneAuthor() {



    // db.mybooks.find( { "authors.1": { $exists: true } } )

    await books.find({}).then(function (books) {
        books.forEach(function (book) {
            if (book.authors.length > 1) {
                console.log(book.title);
            }
        })
    })
}


// Select all authors
async function getAllAuthors() {
    await authors.find({}).then(function (authors) {
        console.log(authors);
    })
}

// Select all dead authors
async function getDeadAuthors() {
    await authors.find({}).then(function (authors) {
        authors.forEach(function (author) {
            if (author.dateOfDeath != null) {
                console.log(author.name);
            }
        })
    }
    )
}

// Select all authors born before 1990

async function getAuthorsBornBefore1990() {
    await authors.find({ dateOfBirth: { $lt: "1990-01-01" } }).then(function (authors) {
        console.log(authors);
    })
}


//Select all authors from a given country
async function getAuthorsFromCountry(country) {
    await authors.find({ country: country }).then(function (authors) {
        console.log(authors);
    })
}


// Eliminate all the books for a given author

async function eliminateBooks(name) {
    const authorId = await authors.findOne({ name: name })
    await books.deleteMany({ authors: authorId._id })

}

module.exports = {
    addAuthor,
    addBook,
    updateAuthor,
    updateBook,
    getAllBooks,
    getBooksByCategory,
    getBooksBefore2002,
    getBooksWithMoreThanOneAuthor,
    getAllAuthors,
    getDeadAuthors,
    getAuthorsBornBefore1990,
    getAuthorsFromCountry,
    eliminateBooks,

}




