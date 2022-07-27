import React, { Component } from 'react'
import '../Styles/Sports.css';
import EquipCard from './EquipCard.js';

export default class Sports extends Component {
    state = { data : "sports"}
  render() {
    return (
      <div className="sports">
            <div className="sports1">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="sports2">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="sports3">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
      </div> 
    )
  }
}