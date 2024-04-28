const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String, // Use 'type' to specify the data type
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number, // For price, it's better to use Number instead of Float
        required: true
    },
    publication_year: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema); // Corrected exports and added schema
