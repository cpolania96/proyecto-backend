//IMPORTS
const express = require('express')
const { urlencoded } = require('express')
const Contenedor = require('./../products/contenedor')

// LISTEN SERVER
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})

// MANEJO DE ERRORES EN SERVER
server.on('error', error => console.log(`Este es el error ${error}`))

// ----------------------------------------

// Mascotas 
const routerProductos = express.Router()
const routerInicio = express.Router()

// INICIALIZACION DE CONTENEDOR
const Producto1 = new Contenedor('./products/productos.txt')


// RUTAS
app.use('/productos', routerProductos)
app.use('/', routerInicio)


//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
routerProductos.use(express.json())
routerProductos.use(urlencoded({ extended: true }))

// ARCHIVOS ESTÁTICOS
app.use(express.static('public'))

// ENDPOINTS)
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
    res.json('<h1>Producto Guardado Exitosamente</h1>')
})

