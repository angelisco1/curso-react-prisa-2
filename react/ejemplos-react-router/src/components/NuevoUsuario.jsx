import React from 'react';
import { Redirect } from 'react-router-dom';


export class NuevoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosGuardados: false
        };
        this.guardarDatos = this.guardarDatos.bind(this);
    }

    guardarDatos() {
        // console.log(this.props);
        console.log('Guardado!')
        // this.props.history.push('/usuarios');
        this.setState({
            datosGuardados: true
        });
    }

    render() {
        return (
            <div>
                <h1>Nuevo Usuario</h1>
                { this.state.datosGuardados ? <Redirect to="/usuarios" /> : null }
                <button type="button" onClick={this.guardarDatos}>Guardar</button>
            </div>
        );
    }
}