import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import { NuevoUsuario } from './components/NuevoUsuario';
import InfoUsuario from './components/InfoUsuario';
import { Error } from './components/Error';
import './styles.css';

class RoutingExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logueado: false
        };
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        {/* <Link to="/">Home</Link> |
                        <Link to="/nuevo-usuario">Nuevo Usuario</Link> */}
                        <NavLink to="/usuarios" exact activeStyle={{fontSize: 22}}>Home</NavLink> |
                        {this.state.logueado ? <NavLink to="/nuevo-usuario">Nuevo Usuario</NavLink> : null}
                        <button type="button" onClick={() => this.setState((state, props) => ({logueado: !state.logueado}))}>{this.state.logueado ? 'Desloguear' : 'Loguear'}</button>
                    </nav>
                </header>
                {/* <Home /> */}
                {/* <Route path='/' render={() => <h1>Bienvenidos</h1>} />
                <Route path='/' exact render={() => <Home />} /> */}
                <Switch>
                    {this.state.logueado ? <Route path="/nuevo-usuario" component={ NuevoUsuario } /> : null}
                    <Route path="/usuarios" component={ Home } />
                    <Redirect from='/' exact to='/usuarios' />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><RoutingExample /></BrowserRouter>, document.getElementById('app'));