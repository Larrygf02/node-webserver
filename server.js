const express = require('express')

const app = express()

app.get('/', function(req, res) {
    let salida = {
        nombre: 'Raul',
        edad: 25,
        url: req.url
    }
    res.send(salida);
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})