const express = require("express");
var app = express();

app.use("/", express.static("public/index.html"))

app.listen(80);

console.log("Servidor Listo");
