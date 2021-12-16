const mongoose = require("mongoose")
const authors = require("./src/models/authorModel.js")
const books = require("./src/models/bookModel.js")
console.log("hi!");
mongoose.connect("mongodb://localhost:27017/books")