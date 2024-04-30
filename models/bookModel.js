const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        unique : true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number, 
        required: true
    },
    publication_year: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);
