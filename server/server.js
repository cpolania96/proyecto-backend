//IMPORTS
const express = require('express')


// LISTEN SERVER
const app = express()
const port = normalizePort(process.env.PORT || 8080)
const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})


// MANEJO DE ERRORES EN SERVER
server.on('error', error => console.log(`Este es el error ${error}`))



