const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000

let notes = [];
let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create Note
app.post('/note', (req, res) => {
  const note = req.body;

  console.log(note);
  notes.push(note);

  res.send('Note is added to the database');
});

// Read all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});


// METHODS FOR TABLE USERS
  // get all users
app.get('users', (req, res) => {
  res.json(users);
});

  // create user
app.post('/user', (req, res) => {
  const user = req.body;
  console.log(user)
  users.push(user);
  res.send('User is added to the database');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
