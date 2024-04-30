const express = require("express");
const Book = require("../models/bookModel");



exports.getbooks = async (req, res) => {
    try {
        const { author, publication_year } = req.query;
        let query = {};

        if (author) {
            query.author = author;
        }

        if (publication_year) {
            query.publication_year = publication_year;
        }

        const books = await Book.find(query);

        if (!books || books.length === 0) {
            return res.status(404).json({ message: 'No books found matching the criteria' });
        }

        res.json(books);
    } catch (error) {
        console.error('Error filtering books:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.createbook = async (req, res) => {
    const { title, author, price, publication_year } = req.body;
    
    // Check if any required fields are missing
    if (!title || !author || !price || !publication_year) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    
    // Check for duplicacy of book title
    const existingBook = await Book.findOne({ title: title });
    if (existingBook) {
        return res.status(400).json({ message: "Duplicate Book title" });
    }
    
    try {
        // Create the book
        const newBook = await Book.create({
            title,
            author,
            price,
            publication_year
        });
        
        // Send success response
        return res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        // Handle any errors that occur during creation
        console.error("Error creating book:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.deletebook = async ( req,res)=>{
    const {title} = req.body;
    if(!title) return res.status(400).json({message: "Please provide title of book you want to delete"})
    const book = await Book.findOneAndDelete({title});
    if(book) return res.status(200).json({message : "Book Deleted successfully"});
    else return res.status(400).json({message : "Not able to find Book"});
}

exports.updatebook = async (req,res)=>{
    const { id } = req.params;
    const { title, author, price, publication_year } = req.body;
    console.log(id, title)

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, price, publication_year }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(updatedBook);
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.filterbook = async (req, res) => {
    try {
        const { author, publication_year } = req.query;
        let query = {};

        if (author) {
            query.author = author;
        }

        if (publication_year) {
            query.publication_year = publication_year;
        }

        const books = await Book.find(query);

        if (!books || books.length === 0) {
            return res.status(404).json({ message: 'No books found matching the criteria' });
        }

        res.json(books);
    } catch (error) {
        console.error('Error filtering books:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};