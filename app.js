const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/',(req,res)=>res.send('Hola mundo'));
app.listen(port,()=>console.log('El servidor esta corriendo en el puerto:'+port));