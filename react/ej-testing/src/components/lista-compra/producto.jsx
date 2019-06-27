import React from 'react';

const Producto = ({ checked, onHandleClick, children }) => {
  let styles = {
    textDecoration: checked ? 'line-through' : 'none'
  };
  return (
    <div className="producto" style={styles} onClick={() => onHandleClick() }>
      <span>{ children }</span>
    </div>
  )
};

export default Producto;