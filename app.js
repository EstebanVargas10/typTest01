const express = require('express');
const app = express();
var git = require('git-rev-sync');

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

const gitHash = git.short();
console.log(`Git hash: ${gitHash}`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Songs
app.get('/MediaNoche', (req, res) => {
  res.sendFile(__dirname + '/pages/MediaNoche.html');
});

app.get('/Chirripo', (req, res) => {
  res.sendFile(__dirname + '/pages/Chirripo.html');
});

app.get('/ODM', (req, res) => {
  res.sendFile(__dirname + '/pages/ODM.html');
});

app.get('/Cacao', (req, res) => {
  console.log('Cacao');
  res.sendFile(__dirname + '/pages/Cacao.html');
});

app.get('/Nalgotas', (req, res) => {
  console.log('Nalgotas');
  res.sendFile(__dirname + '/pages/Nalgotas.html');
});

// Others
app.get('/MeetAndGreet', (req, res) => {
  res.sendFile(__dirname + '/pages/Playlist.html');
});

app.get('/Playlist', (req, res) => {
  res.sendFile(__dirname + '/pages/Playlist.html');
});

// Social
app.get('/YT', (req, res) => {
  res.sendFile(__dirname + '/pages/YT.html');
});

app.get('/Insta', (req, res) => {
  res.sendFile(__dirname + '/pages/Insta.html');
});

// Config
app.get('/deploy', (req, res) => {
  res.sendFile(__dirname + '/pages/deploy.html');
});

// Config
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/pages/Playlist.html');
});
