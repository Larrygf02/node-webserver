const hbs = require('hbs')

//Helpers : Una funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})