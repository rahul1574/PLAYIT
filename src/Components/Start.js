import React from 'react'
import{Link} from "react-router-dom";
function Start() {
    const removestart=()=>{
        document.getElementById('start').style.display='none';
    }
  return (
    <div id='start'style={{height:'300px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <h1 style={{color:'white',margin:'30px'}}>VIBE TOUCH</h1>
      <h4 style={{color:'white'}}>~Be Together</h4>
      <img src='play.gif' alt='' style={{height:'70px',margin:'20px'}}></img>
      <div>
         <Link to='/signup' onClick={removestart}><button className='signin'style={{height:'50px',width:'200px',margin:'10px',background:'white',border:'none',color:'black',borderRadius:'20px',}}>SIGNUP</button></Link>
         <Link to='/signin' onClick={removestart}><button className='signin'style={{height:'50px',width:'200px',margin:'10px',background:'#14213d',border:'none',color:'white',borderRadius:'20px'}}>SIGNIN</button></Link>
      </div>
    </div>
  )
}

export default Start