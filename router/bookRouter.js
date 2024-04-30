const express = require("express");
const {getbooks, createbook, deletebook, updatebook} =require("../controller/bookController");



const bookrouter = express.Router();

bookrouter.get("/", getbooks) 
bookrouter.post("/", createbook)
bookrouter.delete("/", deletebook);
bookrouter.put("/:id", updatebook)



module.exports= bookrouter;