const express = require('express');
const app = express();
var git = require('git-rev-sync');

console.log(git.short());

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Songs
app.get('/MediaNoche', (req, res) => {
  res.sendFile(__dirname + '/pages/MediaNoche.html');
});

app.get('/Cacao', (req, res) => {
  console.log('Cacao');
  res.sendFile(__dirname + '/pages/Cacao.html');
});

// Social
app.get('/YT', (req, res) => {
  res.sendFile(__dirname + '/pages/YT.html');
});
