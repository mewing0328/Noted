const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js') // variable tied to a file location
const PORT = process.env.PORT || 3001;
const app = express(); // variable tied to invoking express methods

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public')); // provide public access to files

// GET Route for html page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Starter code has '/api/notes/${id}
app.delete('/:id', (req, res) => 
  res.json(`Item has been deleted 🗑️`)
);

// Wildcard route to direct users back to index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// TO DO - Change to Heroku url when ready
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);