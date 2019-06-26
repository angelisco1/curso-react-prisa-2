import React from 'react';

class CajaColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorFondo: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      colorFondo: props.num < 0 ? 'red' : 'green'
    }
  }

  shouldComponentUpdate(nextProps) {
    let colorNuevo = nextProps.num < 0 ? 'red' : 'green';
    let colorAnterior = this.state.colorFondo;
    return colorNuevo !== colorAnterior;
  }

  render() {
    console.log('Se ha pintado!');
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.colorFondo
    }

    return (
      <div style={styles}>
      </div>
    )
  }
}

export default CajaColor;