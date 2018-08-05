const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoDB = require('../db/db.js');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// outputs all comments for a song
app.get('/songs/:songId', (req, res) => {
  mongoDB.getComments(null, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// server connection
const PORT = 1458;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
