const express = require("express");
const server = express();

const routes = require("./routes");

//procura arquivs .ejs dentro de view e executa
server.set("view engine","ejs");

//middleware
//habilitar arquivos staticos ex: css e images
server.use(express.static("public"))
server.use(routes)



server.listen(process.env.PORT || 3000, ()=> console.log("Rodando"));