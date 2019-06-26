import React from 'react';

const Header = (props) => (
  <div className="flex-header">
    <img width="100" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Logo de la app" />
    {/* Aquí lo que cambia (h1, h2, nav) */}
    {props.children}
  </div>
);

export default Header;