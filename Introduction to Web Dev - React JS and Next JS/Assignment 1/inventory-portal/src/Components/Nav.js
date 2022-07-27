import React, { Component } from 'react'
import '../Styles/Nav.css';

export default class Nav extends Component  {
  render() {

    return (
         <div className="Pages">
         <span className="Button1">
            <label for="testi">Testimonials</label>
            <input type="checkbox" name="testi" id="testi"></input>        
         </span>
         <span className="Button2">
            <label for="music">Music</label>
            <input type="checkbox" name="music" id="music"></input>        
         </span>
         <span className="Button3">
            <label for="sports">Sports</label>
            <input type="checkbox" name="sports" id="sports"></input>        
         </span>
         <span className="Button4">
            <label for="tech">Tech</label>
            <input type="checkbox" name="tech" id="tech"></input>        
         </span>

         <span className="Button5">
            <label for="contact">Contact Us</label>
            <input type="checkbox" name="contact" id="contact"></input>        
         </span>


         </div>



         
         
        


       
    )
  }
}
