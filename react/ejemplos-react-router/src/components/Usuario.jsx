import React from 'react';
import { withRouter } from 'react-router-dom';

class Usuario extends React.Component {
    componentDidMount() {
        console.log('Usuario didMount' ,this.props);
    }
    
    render() {
        return (
            <div>Usuario: {this.props.nombre} (ID: {this.props.id})</div>
        );
    }
}

// export default Usuario;
export default withRouter(Usuario);