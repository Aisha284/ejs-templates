const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our home page';
  res.render('pages/index', {title:title});
})

//our crochet page
app.get('/movies', (req, res) => {
  var title = 'Our Moives page';
  res.render('pages/Movies', {title:title});
})

//our sewing page
app.get('/fashion', (req, res) => {
  var title = 'Our Fashion page';
  res.render('pages/Fashion', {title:title});
})

//our book page
app.get('/books', (req, res) => {
  var title = 'Our Books Page';
  res.render('pages/Books', {title:title});
})

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
    console.log(data);
});

