import React from 'react'

function Formulario() {
  return (
    <div class="contenedor-formulario">
      <h1>Formulario ingreso de productos</h1>
      <form action="/productos/guardar" method="POST">
        <ul>
          <li><span>Nombre: </span><input type="text" name="nombre" /></li>
          <li><span>Precio: </span><input type="text" name="precio" /></li>
          <li><span>URL de imagen: </span><input type="text" name="urlimg" /></li>
          <li class="contenedor-button"><button>Guardar</button></li>
        </ul>
      </form>
      <ul class="botones-opciones">
        <li><button>Ver productos</button></li>
      </ul>
    </div>
  )
}

export default Formulario