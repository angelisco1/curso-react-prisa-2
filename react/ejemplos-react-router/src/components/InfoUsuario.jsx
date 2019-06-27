import React from 'react';
import { withRouter } from 'react-router-dom';

class InfoUsuario extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <h1>Usuario ({this.props.match.params.id}): {this.props.location.state.nombre}</h1>
        );
    }
}

export default withRouter(InfoUsuario);