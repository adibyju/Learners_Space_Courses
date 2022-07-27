import React, { Component } from 'react'
import '../Styles/Subscribe.css';

export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="left">
            <p className="writing">
                Subscribe to our newsletter to stay updated about the latest equipment additions! &nbsp;&nbsp;&rarr;
            </p>
        </div>
        <div className="right">
            <p className="fill">Newsletter Subscription Form</p>
            <label for="name" id="lab">Name: </label>
            <input type="text" id="name" name="name" />
            <hr className="hor" />
            <label for="roomNo" id="lab">Room No: </label>
            <input type="text" id="roomNo" name="roomNo" />
            <hr className="hor" />
            <label for="email" id="lab">Email: </label>
            <input type="text" id="email" name="email" />
            <hr className="hor" />
            <input type="submit" className="submit" />
        </div>
      </div>      
    )
  }
}
