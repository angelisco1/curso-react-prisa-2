import React from 'react';

class CuentaAtras extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 5
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log('Cuenta atrás');
      if (this.state.num > 0) {
        this.setState({
          num: this.state.num - 1
        })
      } else {
        clearInterval(this.state.intervalId);
        this.setState({
          intervalId: null
        })
      }
    }, 1000);

    this.setState({
      intervalId: intervalId
    })
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    return (
      <div>{this.state.num}</div>
    )
  }
}

export default CuentaAtras;