const express = require('express')
const hbs = require('hbs')
const app = express()

app.use( express.static( __dirname + '/public'))

//Para usar handlebars
app.set('view engine', hbs)

app.get('/', function(req, res) {

    res.render('home.hbs', {
        name: 'Raul',
        anio: new Date().getFullYear()
    });
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})