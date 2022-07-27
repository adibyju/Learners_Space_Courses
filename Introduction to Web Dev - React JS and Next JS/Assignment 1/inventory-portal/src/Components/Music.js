import React, { Component } from 'react'
import '../Styles/Music.css';
import EquipCard from './EquipCard.js';

export default class Music extends Component {
    state = { data : "music"}
  render() {
    return (
      <div className="music">
            <div className="music1">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="music2">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
            <div className="music3">
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
                <EquipCard dataFromParent = {this.state.data}/>
            </div>
      </div> 
    )
  }
}
