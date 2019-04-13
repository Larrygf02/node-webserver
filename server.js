const express = require('express')
const hbs = require('hbs')
const app = express()

//Importando helpers
require('./hbs/helpers')

// configurando el puerto para subirlo a heroku
const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public'))

//Para usar handlebars
app.set('view engine', hbs)

hbs.registerPartials( __dirname + '/views/partials');
app.get('/', function(req, res) {

    res.render('home.hbs', {
        name: 'Raul',
        //anio: new Date().getFullYear()
    });
})

app.get('/about', function(req,res) {
    res.render('about.hbs', {
        name: 'Raul',
    })
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})