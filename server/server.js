//IMPORTS
const Contenedor = require('./../products/contenedor')
const express = require('express')
const { urlencoded } = require('express')
const ReactDOMServer = require('react-dom/server')
const { default: Formulario } = require('../src/modules/Formulario/Formulario')

// LISTEN SERVER
const app = express()
const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})
// Mascotas 
const routerProductos = express.Router()
// app.use('/productos')

// INICIALIZACION DE CONTENEDOR
const Producto1 = new Contenedor('./products/productos.txt')


// RUTAS
app.use('/productos', routerProductos)

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
routerProductos.use(express.json())
routerProductos.use(urlencoded({ extended: true }))

// ARCHIVOS ESTÁTICOS
app.use(express.static('public'))

// ENDPOINTS
app.get('/', (req, res) => {
    let inicio = ReactDOMServer.renderToString(<Formulario />)
    res.send(inicio)
})
app.get('/productos', async function (req, res) {
    res.json(await Producto1.getAll())
})
app.get('/productoRandom', async function (req, res) {
    res.json(await Producto1.productRandom())
})
routerProductos.post('/guardar', async function (req, res) {
    await Producto1.save(
        {
            title: req.body.nombre,
            price: req.body.precio,
            thumbnail: req.body.urlimg
        }
    )
    res.json(req.body)
})

// MANEJO DE ERRORES EN SERVER
server.on('error', error => console.log(`Este es el error ${error}`))



