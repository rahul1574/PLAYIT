import React from 'react'
// import './Style.css';
import { Link } from 'react-router-dom';
import Player3 from './Player3.js';
export default function Topic3() {
  return (
    <>
    <div>
      <p id="head">TAMIL PLAYLIST</p>
      <Player3/>
    </div>
    <div style={{height:'210px',backgroundColor:'transparent'}}>
     <div style={{height:'50px',backgroundColor:'green',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}><Link to='/recommend'><h3>Recomand a song➕</h3></Link></div>
    </div>
    </>
  )
}
