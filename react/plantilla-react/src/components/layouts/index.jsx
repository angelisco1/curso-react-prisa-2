import React from 'react';
import Header from './Header';
import Card from './Card';

class LayoutCmp extends React.Component {
  render() {
    return (
      <div>
        <h1>Layout: Headers y Card</h1>
        {/* <Header />
        <Header>
          <h1>React JS</h1>
        </Header>
        <Header>
          <h2>React JS</h2>
        </Header>
        <Header>
          <nav>
            <a href="#">Enlace 1</a>
            <a href="#">Enlace 2</a>
            <a href="#">Enlace 3</a>
          </nav>
        </Header> */}
        <Card>
          <h2>Título</h2>
          <div>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis quam quis expedita alias! Quas iusto quasi culpa modi deleniti excepturi iste? Alias optio aperiam sed cum iste cupiditate nobis!</p>
          </div>
          <div className="btn-group-card">
            <button type="button">Btn 1</button>
            <button type="button">Btn 2</button>
          </div>
        </Card>
        <Card>
          <Header>
            <h1>Titulo</h1>
          </Header>
          <div>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Earum blanditiis quam quis expedita alias!</li>
              <li>Quas iusto quasi culpa modi deleniti excepturi iste?</li>
              <li>Alias optio aperiam sed cum iste cupiditate nobis!</li>
            </ul>
          </div>
          {/* <div className="btn-group-card">
            <button type="button">Btn 1</button>
            <button type="button">Btn 2</button>
          </div> */}
        </Card>
      </div>
    );
  }
}

export default LayoutCmp;