import React, { Component } from 'react'
import '../Styles/EquipCard.css';
import musicImg from '../music.jpg'
import sportsImg from '../sports.jpg'
import techImg from '../tech.jpg'

export default class EquipCard extends Component {
  render() {
    var x = "Music";
    var y = musicImg;
    if (this.props.dataFromParent=="tech"){
        x="Tech";
        y=techImg;
    }
    else if (this.props.dataFromParent==="sports") {
        x="Sports";
        y=sportsImg;    
    }
    
    return (
      <div className="equip-card">
           <img src={y} alt="" className="equip-img" /> 
           <p className="equip-name">{x} Equipment</p>
           <p className="equip-no">No of Items:</p>
      </div>
    )
  }
}
