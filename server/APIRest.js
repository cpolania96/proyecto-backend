const { urlencoded } = require('express')
const config = require('./webpack.config')
const { default: Formulario } = require('../src/modules/Formulario/Formulario')
const express = require('express')
const Producto1 = require('../products/contenedor')
const Contenedor = require('./../products/contenedor')
const app = express()

// Mascotas 
const routerProductos = express.Router()
const routerInicio = express.Router()

// INICIALIZACION DE CONTENEDOR
const Producto1 = new Contenedor('./products/productos.txt')


// RUTAS
app.use('/productos', routerProductos)


//MIDDLEWARES
app.use(express.json())
se(express.urlencoded({ extended: true }))
use(webpackDev(webpack(config)))
routerProductos.use(express.json())
routerProductos.use(urlencoded({ extended: true }))

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')))

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