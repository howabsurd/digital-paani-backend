const handleMongooseError = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        // Mongoose validation error
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ message: "Validation Error", errors });
    } else if (err.name === 'CastError' && err.kind === 'ObjectId') {
        // Mongoose CastError for invalid ObjectId
        return res.status(400).json({ message: "Invalid ObjectId" });
    } else {
        // Any other Mongoose error
        console.error('Mongoose error:', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = handleMongooseError;