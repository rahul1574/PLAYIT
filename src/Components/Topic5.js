import React from 'react'
// import './Style.css';
import { Link } from 'react-router-dom';
import Player5 from './Player5.js';

export default function Topic5() {
  return (
    <>
    <div>
      <p id="head">HI DARLINGS!</p>
      <Player5/>
    </div>
    <div style={{height:'210px',backgroundColor:'transparent'}}>
     <div style={{height:'50px',backgroundColor:'green',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}><Link to='/recommend'><h3>Recomand a song➕</h3></Link></div>
    </div>
    </>
  )
}
