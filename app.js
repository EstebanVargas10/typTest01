const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.set('views', './views');
app.set('view engine', 'ejs');

//Home
app.get('', (req, res) => {
  res.render('index');
});

//Songs
app.get('/MediaNoche', (req, res) => {
  res.render('MediaNoche');
});

// Social
app.get('/YT', (req, res) => {
  res.render('YT');
});

app.listen(port, () => console.info(`Listening on port ${port}`));
