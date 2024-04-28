const express = require("express");
const Book = require("../models/bookModel");


exports.getAllBooks = async (req,res) =>{
    const books = Book.find({});
    res.status(200).json({message : books})
}