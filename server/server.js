const express = require('express')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})

server.on('error', () => {
    console.log(`Este es el error ${error}`);
})
