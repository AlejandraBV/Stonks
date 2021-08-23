var express = require('express');
var router = express.Router();
const axios = require('axios');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
axios.get("/clientes").then(function (response) {
    (async () => {
    const data = await fs.promises.readFile("../clientes.json", 'utf8');
    res.end(data);
  })();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

router.get("/clientes", function (req, res, next){
  var html = "<html>uwu";
  (async () => {next
    const data = await fs.promises.readFile("../clientes.json", 'utf8');
  })();
  
  //res.sendFile("C:/Users/Aleja/OneDrive/Documents/nodeclase/tarea/public/clientes.html");
  //res.appendTable(data);
  html += "</html>";
  res.end(html);
});
*/

router.get("/clientes", function (req, res, next){
  (async () => {next
    var html = "<html lang='en'>    <head>      <meta charset='utf-8'>    </head>";
    var data = await fs.promises.readFile("../clientes.json", 'utf8');
    data = JSON.parse(data);
    console.log(data);
    var table = "<h3 style='font-weight:bold; text-align:center'>Listado de clientes</h3><table class='table table-striped'><tr><td  style='font-weight:bold'>ID</td>        <td  style='font-weight:bold'>Nombre</td>        <td  style='font-weight:bold'>Contacto</td>    </tr>";
    for(obj of data){
        var append = "<tr><td>"+obj.idCliente+"</td>        <td>"+obj.NombreCompania+"</td>        <td>"+obj.NombreContacto+"</td> </tr>";        
        table += append;
    }
    table += "        </table>";
    html+= table;
    html += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>   <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script></html>";
    console.log(html);
    res.end(html);
  })();

  //res.sendFile("C:/Users/Aleja/OneDrive/Documents/nodeclase/tarea/public/clientes.html");
  //res.appendTable(data);
  
});

router.get("/proveedores", function (req, res, next){
  (async () => {next
    var html = "<html lang='en'>    <head>      <meta charset='utf-8'>    </head>";
    var data = await fs.promises.readFile("../proveedores.json", 'utf8');
    data = JSON.parse(data);
    console.log(data);
    var table = "<h3 style='font-weight:bold; text-align:center'>Listado de proveedores</h3><table class='table table-striped'><tr><td  style='font-weight:bold'>ID</td>        <td  style='font-weight:bold'>Nombre</td>        <td  style='font-weight:bold'>Contacto</td>    </tr>";
    for(obj of data){
        var append = "<tr><td>"+obj.idproveedor+"</td>        <td>"+obj.nombrecompania+"</td>        <td>"+obj.nombrecontacto+"</td> </tr>";        
        table += append;
    }
    table += "        </table>";
    html+= table;
    html += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>   <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script></html>";
    console.log(html);
    res.end(html);
  })();

  //res.sendFile("C:/Users/Aleja/OneDrive/Documents/nodeclase/tarea/public/clientes.html");
  //res.appendTable(data);
  
});

module.exports = router;
