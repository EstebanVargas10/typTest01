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

app.get('/Decline', (req, res) => {
  console.log('Decline');
  res.sendFile(__dirname + '/pages/Decline.html');
});

// Others
app.get('/MeetAndGreet', (req, res) => {
  res.sendFile(__dirname + '/pages/playlist.html');
});

app.get('/playlist', (req, res) => {
  res.sendFile(__dirname + '/pages/playlist.html');
});

// Social
app.get('/YT', (req, res) => {
  res.sendFile(__dirname + '/pages/youtube.html');
});

app.get('/insta', (req, res) => {
  res.sendFile(__dirname + '/pages/insta.html');
});

// Config
app.get('/deploy', (req, res) => {
  res.sendFile(__dirname + '/pages/deploy.html');
});

// 404
app.all('*', (req, res) => {
  res.sendFile(__dirname + '/pages/Playlist.html');
});
