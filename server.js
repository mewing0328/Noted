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

// Wildcard route to direct users back to index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// app.get('/api/notes', (req, res) => {
//   res.json()
// })

// TO DO - Change to Heroku url when ready
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT} 🚀`)
);

/* 
TO DO: 
- GET /notes should return the notes.html file.
- GET * should return the index.html file.
- The following API routes should be created:
    - GET /api/notes should read the db.json file and 
        return all saved notes as JSON.
    - POST /api/notes should receive a new note to save on the 
        request body, add it to the db.json file, and then return the 
        new note to the client. You'll need to find a way to give each 
        note a unique id when it's saved (look into npm packages that 
        could do this for you).
    - DELETE /api/notes/:id should receive a query parameter that contains 
        the id of a note to delete. To delete a note, you'll need to read all 
        notes from the db.json file, remove the note with the given id property, 
        and then rewrite the notes to the db.json file.

-GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

*/