const express = require("express");
const dataStore = require("nedb");
const path = require("path");
const dbFileName = path.join(__dirname, "basket.db");

const db = new dataStore({
    filename: dbFileName,
    autoload: true
});

var app = express();

//app.use("/", express.static("public/index.html"))

var baloncestoInitialData = [
    {country:'serbia', year:2016, points:66, threepoints:4, rebounds:33},
    {country:'spain', year:2012, points:100, threepoints:7, rebounds:35},
    {country:'spain', year:2008, points:107, threepoints:8, rebounds:37},
    {country:'italy', year:2004, points:69, threepoints:11, rebounds:26},
    {country:'france', year:2000, points:75, threepoints:6, rebounds:20},
];

app.get("/loadInitialData", (request,response) =>{
    db.remove({},{multi: true}); //Elimina la db
    db.insert(baloncestoInitialData);
    response.sendStatus(200);
});

console.log("Servidor Listo");

app.listen(80);
