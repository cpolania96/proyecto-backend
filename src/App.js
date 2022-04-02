import { Route, Router, Routes } from 'react-router-dom';
import './css/style.css';
import Formulario from './modules/Formulario/Formulario';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <h1>Formulario</h1>
      } />
      <Route path="/productos/guardar" element={<Formulario />} />
    </Routes>

  );
}

export default App;
