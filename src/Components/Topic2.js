import React from 'react';
import Player2 from './Player2.js';
import { Link } from 'react-router-dom';
export default function Topic2() {
  return (
    <>
    <p id="head">HINDI PLAYLIST</p>
    <div>
      <Player2/>
    </div>
    <div style={{height:'210px',backgroundColor:'transparent'}}>
      <div style={{height:'50px',backgroundColor:'green',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}><Link to='/recommend'><h3>Recomand a song➕</h3></Link></div>
    </div>
    </>
  )
}
