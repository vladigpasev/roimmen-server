import React, { useState } from "react";
import './logo.css';
import { render } from "react-dom";

import {
  Link
} from 'react-router-dom';
import SvgComponent from './locationpin.jsx';
import SvgComponentgrun from './locationpingrun.jsx';
import SvgComponentmyloc from './mylocation.jsx';
import SvgComponentsend from './sendsvg.jsx';

function Logo_img() {
  const [Showinput1, setShowinput1] = useState(false);
  const [Showinput2, setShowinput2] = useState(false);

  const [comment1, setComment1] = useState('');


  const handleSubmit1 = (event) => {
    event.preventDefault();
    setComment1('');
  };


  const [comment2, setComment2] = useState('');

  const handleSubmit2 = (event) => {
    event.preventDefault();
    setComment2('');
  };

  if(localStorage.getItem("key")  === ""){
    return (
      <nav>
        <div id="logo">
        <Link to={'/'}><img src='logo.png'></img></Link>
        </div>

      <form style={{display: Showinput1 ? "block" : "none"}} onSubmit={handleSubmit1}>
        <input className='abs' placeholder="Your comment..." 
        type="text"
        id="comment1"
        name="comment1"
        value={comment1}
        onChange={(event) =>
          setComment1(event.target.value)
        }/>
        <button type="submit"><SvgComponentsend /></button>
      </form>
      <form style={{display: Showinput2 ? "block" : "none"}} onSubmit={handleSubmit2}>
        <input className='abs' placeholder="Your comment..." 
        type="text"
        id="comment2"
        name="comment2"
        value={comment2}
        onChange={(event) =>
          setComment2(event.target.value)
        }/>
        <button type="submit"><SvgComponentsend /></button>
      </form>
        <div id="pages">
          <button onClick={() => { !Showinput1 ? setShowinput1(true) : setShowinput1(false) }}><SvgComponent /></button>
          <button onClick={() => { !Showinput2 ? setShowinput2(true) : setShowinput2(false) }}><SvgComponentgrun /></button>
          <button><SvgComponentmyloc /></button>
        </div>
  </nav>
    );
    function showinput1() {
      
    }
  }else{
    return (
      <nav>
        <div id="logo">
        <Link to={'/'}><img src='logo.png'></img></Link>
        </div>
  
        <div id="pages">
          <Link to={'/authenticate'}><div id='log'>Authenticate</div></Link>
        </div>
  </nav>
    );
  }
}

export default Logo_img;
