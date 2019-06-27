import Nav from '../components/Nav';
import { withRouter } from 'next/router';

const Usuario = (props) => {
  console.log(props.router.query.id);

  return (
    <div>
      <Nav />
      <h2>Usuario {props.router.query.id}</h2>
    </div>
  )
}

export default withRouter(Usuario);