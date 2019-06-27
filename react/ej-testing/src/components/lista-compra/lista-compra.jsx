import React from 'react';
import Producto from './producto';

class ListaCompra extends React.Component {
  constructor() {
    super();
    this.state = {
      productos: [
        // { id: 0, nombre: 'One Plus 5T', checked: true },
        // { id: 1, nombre: 'Funda One Plus', checked: false },
        // { id: 2, nombre: 'SD 64GB', checked: false }
      ],
      input: ''
    },
    this.getListaProductos = this.getListaProductos.bind(this);
    this.getListaCompra = this.getListaCompra.bind(this);
    this.getLogin = this.getLogin.bind(this);
    this.getForm = this.getForm.bind(this);
    this.addProducto = this.addProducto.bind(this);
    this.changeInput = this.changeInput.bind(this);
    // this.checkProducto = this.checkProducto.bind(this);
  }

  componentDidMount() {
    this.setState({
      productos: this.props.productos || []
    });
  }

  getListaProductos() {
    let productos = this.state.productos.map(producto => {
      return (
        <Producto key={producto.id} checked={ producto.checked } onHandleClick={ this.checkProducto.bind(this, producto.id) }>{producto.nombre}</Producto>
      )
    });
    return productos;
  }

  getListaCompra() {
    let productos = this.getListaProductos();
    return (
      <div>
        <h1>Lista compra</h1>
        { productos.length > 0 ? productos : <p>Lista vacia</p> }
        { this.getForm() }
      </div>
    );
  }

  getLogin() {
    return (
      <div>
        <h1>No estas logueado</h1>
        <button type="button">Login</button>
      </div>
    );
  }

  getForm() {
    return (
      <form onSubmit={ this.addProducto }>
        <input type="text" value={ this.state.input } onChange={ this.changeInput } />
      </form>
    );
  }

  addProducto(e) {
    e.preventDefault();
    let productos = this.state.productos.concat([{
      id: this.state.productos.length,
      nombre: this.state.input,
      checked: false
    }]);
    this.setState({
      productos: productos,
      input: ''
    });
  }

  checkProducto(id) {
    const newProductos = this.state.productos;
    newProductos[id].checked = !newProductos[id].checked;
    this.setState({
      productos: newProductos
    });
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const cmp = this.props.logueado ? this.getListaCompra() : this.getLogin();
    return (
     cmp
    );
  }
}

export default ListaCompra;