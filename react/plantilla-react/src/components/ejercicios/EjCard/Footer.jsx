import React from 'react';

const Footer = props => (
  <div className="btn-group-card">
    <button type="button">{props.btn1Txt}</button>
    <button type="button">{props.btn2Txt}</button>
  </div>
)

export default Footer;