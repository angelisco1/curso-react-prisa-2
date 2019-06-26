import React from 'react';
import Fragments from './Fragments';
import Referencias from './Referencias';
import ContextPadre from './ContextPadre';

class RefsCtxFragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Fragments</h1>
        <Fragments />
        <h1>Referencias</h1>
        <Referencias />
        <h1>Context</h1>
        <ContextPadre />
      </React.Fragment>
    )
  }
}

export default RefsCtxFragments;