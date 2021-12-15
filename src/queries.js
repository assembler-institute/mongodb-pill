// create mongodb query for books database

const { log } = require("console");

function getBooks() {
    return db.books.find();
}