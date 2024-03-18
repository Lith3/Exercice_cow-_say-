//const obj = require('./information');
const objImp = require('./information');
console.log(objImp);

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "Je suis "+ objImp.nom + "du campus "+objImp.campus
    
}));
