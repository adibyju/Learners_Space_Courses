import React, { Component } from 'react'
import '../Styles/Tech.css';
import EquipCard from './EquipCard.js';

export default class Tech extends Component {
    state = { data : "tech"}
  render() {
    return (
      <div className="tech">
            <div className="tech1">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="tech2">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="tech3">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
      </div> 
    )
  }
}
