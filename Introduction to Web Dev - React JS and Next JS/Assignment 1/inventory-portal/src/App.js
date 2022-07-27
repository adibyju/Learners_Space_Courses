import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Top from './Components/Top.js';
import Nav from './Components/Nav.js';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Music from './Components/Music';
import Sports from './Components/Sports';
import Tech from './Components/Tech';

function App() {
  var x = "Music";
  var y =<Testimonials/>;
  if(x==="Music"){
    y = <Music/>;
  }
  else if(x==="Tech"){
      y = <Tech/>;
  }
  else if(x==="Sports"){
      y = <Sports/>;
  }
  else if(x==="Testi"){
    y = <Testimonials/>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
        <Nav/>     

        {y}
        <Subscribe />
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
