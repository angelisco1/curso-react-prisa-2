import React from 'react';
import Usuario from './Usuario';
import { Link, Route } from 'react-router-dom';
import InfoUsuario from './InfoUsuario';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [
                { id: 38, nombre: 'Robb', edad: 26 },
                { id: 9, nombre: 'Negan', edad: 42 },
                { id: 62, nombre: 'Octavia', edad: 21 }
            ]
        }
    }

    render() {
        const usuarios = this.state.usuarios.map(usuario => {
            return (
                // <Link key={usuario.id} to={this.props.match.url + '/' + usuario.id}>
                //     <Usuario nombre={usuario.nombre} id={usuario.id} />
                // </Link>
                <Link key={usuario.id} to={{pathname: this.props.match.url + '/' + usuario.id, state: { nombre: usuario.nombre }}}>
                    <Usuario nombre={usuario.nombre} id={usuario.id} />
                </Link>
            );
        })
        return (
            <div>
                <h1>Usuarios</h1>
                { usuarios }
                <Route path={this.props.match.url + '/:id'} exact component={InfoUsuario} />
            </div>
        );
    }


}

export default Home;