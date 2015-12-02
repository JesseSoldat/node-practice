var express = require('express');

var app = express();

app.set('view engine', 'jade');


app.get('/', function(req, res) {

  res.render('index');

});

app.get('/products/:id', function(req, res) {

  var id = Number(req.params.id);

  var product = products.filter(function(prod){
    return prod.id === id;
  })[0];

  if (product) {
    res.render('product', product);
  } else {
    res.status(404).render('404');
  }

  res.send('the id is :' + id);
});

var products = [
{id: 1, name: 'Ipad'},
{id: 2, name: 'TV'},
{id: 3, name: 'Ping Pong Table'}

]

app.use(express.static(process.cwd() + '/public' )); 

app.listen(8025);
console.log('app is running......');