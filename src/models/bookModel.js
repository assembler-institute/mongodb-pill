const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const validator = require('validator');
// const bcrypt = require('bcrypt');

//Creat the schema for the book where 

/**
Title: String
Release Year: [Date]
Category: String
Authors (id, name, lastName): [{id, name, lastName}, … ]


**/

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    releaseYear: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'Authors'
    }]
});


// export the model
module.exports = mongoose.model('Book', bookSchema);