import React from 'react';

const withDatos = (WrappedCmp, Loader) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculas: [],
        cargando: true
      }
    }

    componentDidMount() {
      fetch(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${this.props.genero}.json`)
        .then(resp => {
          return resp.json()
        })
        .then(peliculas => {
          console.log(peliculas);
          let pelis = []
          for (let id in peliculas) {
            pelis.push({
              id: id,
              titulo: peliculas[id]
            })
          }
          this.setState({
            peliculas: pelis,
            cargando: false
          })
        })
    }

    render() {
      return (
        this.state.cargando ? <Loader /> : <WrappedCmp {...this.props} peliculas={this.state.peliculas} />
      )
    }
  }
}

export default withDatos;