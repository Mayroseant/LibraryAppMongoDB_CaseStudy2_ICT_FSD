//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://userone:userone@data.hquhx.mongodb.net/LibraryApp?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    book: String,
    genre: String,
    image: String
});

//Model creation
var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;