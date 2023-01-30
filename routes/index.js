const express = require('express');

// Import our modular route for /notes

const notesRouter = require('./notes');

const app = express();

// telling express to use the string for the ./notes router renamed as notesRouter
app.use('/notes', notesRouter);

// let other files use app in this manner
module.exports = app;