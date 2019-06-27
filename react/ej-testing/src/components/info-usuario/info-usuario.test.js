import React from 'react';
import { shallow } from 'enzyme';
import InfoUsuario from './info-usuario';

describe('InfoUsuario component', () => {
  it('should render a h1 tag with the text "Usuario no logueado" if not logueado', () => {
    const wrapper = shallow(<InfoUsuario />);
    expect(wrapper.find('h1').text()).toBe('Usuario no logueado');
  });

  it('should render a h1 tag with the text "Usuario logueado" if logueado', () => {
    const wrapper = shallow(<InfoUsuario logueado={ true } usuario="Ramsay Bolton" />);
    expect(wrapper.find('h1').text()).toBe('Usuario logueado');
  });

  it('should render the username if logueado', () => {
    const username = "Ramsay Bolton";
    const wrapper = shallow(<InfoUsuario logueado={ true } usuario={ username } />);
    expect(wrapper.find('p').contains(username)).toBe(true);
  });
});