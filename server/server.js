//IMPORTS
const Contenedor = require('./../products/contenedor')
const express = require('express')

//INICIALIZACION DE SERVER
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})
// INICIALIZACION DE CONTENEDOR
const Producto1 = new Contenedor('./products/productos.txt')

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ENDPOINTS
app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Bienvenido a la tienda de productos Don Bigotes</h1>')
})
app.get('/productos', async function (req, res) {
    res.json(await Producto1.getAll())
})
app.get('/productoRandom', async function (req, res) {
    res.json(await Producto1.productRandom())
})

// MANEJO DE ERRORES EN SERVER
server.on('error', error => console.log(`Este es el error ${error}`))



