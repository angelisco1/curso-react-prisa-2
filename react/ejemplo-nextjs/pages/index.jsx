import Nav from '../components/Nav';
import axios from 'axios';

class Inicio extends React.Component {
  constructor() {
    super()
    this.state = {
      usuarios: []
    }
  }

  static getInitialProps() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(resp => resp.json())
        .then(datos => {
          console.log(datos.data);
          return {
            usuarios: datos.data
          }
        })
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(datos => {
  //       console.log(datos);
  //       this.setState({
  //         usuarios: datos
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <Nav />
        <h2>Inicio</h2>
        {
          this.props.usuarios.map(u => (<li>{u.name}</li>))
        }
      </div>
    )
  }
}

export default Inicio;