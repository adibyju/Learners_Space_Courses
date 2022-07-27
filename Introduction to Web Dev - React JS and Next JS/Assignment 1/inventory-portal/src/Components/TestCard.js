import React, { Component } from 'react'
import '../Styles/TestCard.css';
import dp_ from '../dp.jpg';

export default class TestCard extends Component {
  render() {
    return (
      <div className='Card'>
        <div className="image">
            <img src={dp_} alt="" className="dp" />
        </div>
        <div className="desc">
            <p className="name">
                Name
            </p>
            <p className="job">
                Occupation
            </p>
            <p className="details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam neque, animi, odit sapiente quam voluptates suscipit quidem blanditiis voluptatibus, rem quis! Quam corporis aliquid molestias! Illo vero voluptatibus aliquid dolorem.
            </p>
        </div>

      </div>
    )
  }
}
