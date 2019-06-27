import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../store/contador';

class Contador extends Component {
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <div id="contador">
          <button type="button" onClick={ () => { this.props.decrementCount() } }>-</button>
          <span>Cuenta: { this.props.cuenta }</span>
          <button type="button" onClick={ () => { this.props.incrementCount() }}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    // state.(nombre del reducer)
    cuenta: state.contador
  };
}

const mapDispatchToProps = {
  incrementCount,
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Contador);