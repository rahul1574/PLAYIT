import React from 'react';
// import './Style.css';
import Player from './Player.js';
import { Link } from 'react-router-dom';
export default function Topic1() {
  return (
    <>
    <p id="head">TELUGU PLAYLIST</p>
    <div>
      <Player/>
    </div>
    <div style={{height:'210px',backgroundColor:'transparent'}}>
      <div style={{height:'50px',backgroundColor:'green',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}><Link to='/recommend'><h3>Recomand a song➕</h3></Link></div>
    </div>
    </>
  );
}
