import React, { Component } from 'react'
import logo from '../Logo-Paying Guest.png';
import '../Styles/Top.css';

export default class Top extends Component {
  render() {
    return (
      <div className="Top-bar">
        <img src={logo} className="PG-logo" alt="PG Logo" />
        <div className="Heading-div">
        <h2 className="Heading">Equipment Inventory</h2>
        </div>
        

      </div>
    )
  }
}
