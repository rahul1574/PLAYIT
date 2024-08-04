import React,{useState,useEffect} from 'react'
import{Link} from "react-router-dom";
import ReactConfetti from 'react-confetti'
function Start() {
    const removestart=()=>{
        document.getElementById('start').style.display='none';
    }
    const [windowdimension,setdimension]=useState({width:window.innerWidth, height:window.innerHeight});
    const [btn,setbtn]=useState(false)
    const detectsize=()=>{
        setdimension({width:window.innerWidth, height:window.innerHeight})
    }

    useEffect(()=>{
        window.addEventListener('resize',detectsize);
        return()=>{
            window.removeEventListener('resize',detectsize);
        }
    },[windowdimension]);
    const display=()=>{
      document.getElementById('wow').style.display='none'
      setbtn(!btn)
      document.getElementById('wish').style.display='block'

    }

  return (
    <>
    <div id='start'style={{height:'500px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <h1 style={{color:'white',margin:'30px'}}>VIBE TOUCH</h1>
      <h4 style={{color:'white'}}>~Be Together</h4>
      <img src='play.gif' alt='' style={{height:'70px',margin:'20px'}}></img>
      <div>
         <Link to='/signup' onClick={removestart}><button className='signin'style={{height:'50px',width:'200px',margin:'10px',background:'white',border:'none',color:'black',borderRadius:'20px'}}>SIGNUP</button></Link>
         <Link to='/signin' onClick={removestart}><button className='signin'style={{height:'50px',width:'200px',margin:'10px',background:'#14213d',border:'none',color:'white',borderRadius:'20px'}}>SIGNIN</button></Link>
      </div>
      <button id='wow' onClick={display} style={{height:'50px',width:'180px',borderRadius:'10px',fontSize:'17px',border:'none'}}>4-AUG-2024 🎁</button>
       {btn && <ReactConfetti
       width={windowdimension.width}
       height={windowdimension.height}
       tweenDuration={1000}
       />}
       <h2 id='wish' style={{display:'none',color:'white'}}>HAPPY FRIENDSHIP DAY!💙</h2>
    </div>
    </>
  )
}

export default Start
