import React from 'react';
import Player4 from './Player4.js';
import { Link } from 'react-router-dom';

export default function Topic4() {
  return (
    <>
    <div>
      <p id="head">LOFFI-MASUPS</p>
      <Player4/>
    </div>
    <div style={{height:'210px',backgroundColor:'transparent'}}>
     <div style={{height:'50px',backgroundColor:'green',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}><Link to='/recommend'><h3>Recomand a song➕</h3></Link></div>
    </div>
    </>
  )
}
