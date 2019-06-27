import React from 'react';
import { shallow, mount } from 'enzyme';
import ListaCompra from './lista-compra';
import Producto from './producto';

describe('ListaCompra component', () => {
  let wrapper;
  const productos = [
    { id: 0, nombre: 'One Plus 5T', checked: true },
    { id: 1, nombre: 'Funda One Plus', checked: false },
    { id: 2, nombre: 'SD 64GB', checked: false }
  ];
  beforeEach(() => {
    wrapper = shallow(<ListaCompra logueado={ true } productos={ productos } />)
  });
  
  it('should not render Producto components and a Login button if not logueado', () => {
    wrapper.setState({ productos: [], input: '' })
    wrapper.setProps({ logueado: false })
    expect(wrapper.find(Producto)).toHaveLength(0);
    expect(wrapper.find('button').text()).toBe('Login');
  });
    
  it('should render three Producto components and a Logout button if logueado', () => {
    expect(wrapper.find(Producto)).toHaveLength(3);
    expect(wrapper.find('button').text()).toBe('Logout');
  });
  
  it('should render a message if there is no products and logueado', () => {
    wrapper.setState({ productos: [] });
    expect(wrapper.find(Producto)).toHaveLength(0);
    expect(wrapper.find('p').text()).toBe('Lista vacia');
  });
  
  it('should render the product name if logueado (using mount instead of shallow)', () => {
    wrapper = mount(<ListaCompra logueado={true} productos={[{ id: 1, nombre: 'One Plus 5T' }]} />);
    const name = wrapper.find('span').first().text();
    expect(name).toEqual('One Plus 5T');
  });

  it('should match its empty snapshot', () => {
    wrapper = shallow(<ListaCompra logueado={ false } />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match its snapshot with products and logueado', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match its snapshot with empty products and logueado', () => {
    wrapper.setState({
      productos: []
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should check a product', () => {    
    wrapper = mount(<ListaCompra logueado={true} productos={productos} />)
    // Aqui el primer producto está checked
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Producto).first().props().checked).toBe(true);
    // Pulsamos en el primer producto para cambiar el valor de su checked
    const product = wrapper.find('div.producto').first();
    product.simulate('click');
    // Aqui el primer producto no está checked
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Producto).first().props().checked).toBe(false);
  });

  it('should add a new product to the list', () => {    
    wrapper = mount(<ListaCompra logueado={true} productos={productos} />)
    // Aqui el primer producto está checked
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Producto)).toHaveLength(3);
    // Pulsamos en el primer producto para cambiar el valor de su checked
    const form = wrapper.find('form');
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'un producto nuevo' } });
    form.simulate('submit');
    // Aqui se ha añadido el producto nuevo
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Producto)).toHaveLength(4);
  });
});