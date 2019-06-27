import Nav from '../components/Nav';
import Router from 'next/router';

const NuevoUsuario = () => {
  return (
    <div>
      <Nav />
      <h2>Nuevo Usuario</h2>
      <button type="button" onClick={() => Router.push('/')}>Guardar datos</button>
    </div>
  )
}

export default NuevoUsuario;