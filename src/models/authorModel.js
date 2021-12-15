/**
 * create author schema:
 * Name: String
Last name: String
Date of Birth: Date
Date of death: Date
Country: String
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const validator = require('validator');
// const bcrypt = require('bcrypt');

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    },
    dateOfDeath: {
        type: Date,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    }
});

// export the model
module.exports = mongoose.model('Authors', authorSchema);

