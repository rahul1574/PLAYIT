import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import{Link} from "react-router-dom";
function Recommend() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_m0g157b', 'template_7sfjce3', form.current, {
          publicKey: 'OvCLRYSeO6XzFSpH3',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    const [inputmail,setinputvalue]=useState('')
    const [inputmovie,setinputmovie]=useState('')
    const [inputsong,setinputsong]=useState('')
      const displayres=()=>{
        if(inputmail.trim()==='' || inputmovie.trim()==='' || inputsong.trim()===''){
          alert('enter vaild input')
        }else{
          document.getElementById('append').style.display="block"
          document.getElementById('form').style.display='none'
          document.getElementById('append2').style.display='flex'
        }
        }
  
    return (
        <>
        <div className="navbar">
           <div id="photo"></div>
           <Link  to="/Power" ><i id="three" class="fa-solid fa-power-off"></i></Link>
           <Link to="/home"><i id="two" class="fa-solid fa-house"></i></Link>
       </div>
      <form ref={form}  id='form'onSubmit={sendEmail}style={{ height:'600px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
        <label>Email</label>
        <input type="email" name="user_mail" value={inputmail} onChange={(e)=> setinputvalue(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}}/>
        <label>Movie name & language</label>
        <input type="text" name="user_name" value={inputmovie} onChange={(e)=> setinputmovie(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}} />
        <label>Song name</label>
        <div>
           <input name="message" id='text' value={inputsong} onChange={(e)=> setinputsong(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}}/>
        </div>
        <input id="appendbtn" type="submit" value="Append" onClick={displayres} style={{border:'none',color:'white',background:'#14213d',borderRadius:'20px'}} />
        <Link to='/home'><button style={{border:'none',background:'transparent',display:'flex',flexDirection:'column',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',color:'white',fontSize:'50px',margin:'5px'}}>↩</button></Link>
      </form>
      <div id='append2' style={{height:'700px',display:'none',flexDirection:'column',justifyContent:'flex-start',alignContent:'center',alignItems:'center',textAlign:'center'}}>
       <img src='monkey.png' alt='' style={{height:'350px'}}></img>
       <p id='append'style={{height:'70px',fontSize:'15px',width:'350px',color:'green',background:'black',display:'none',alignContent:'center',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px'}}>Your song will be appended within short time....</p>
       <Link to='/home'><button style={{border:'none',background:'transparent',display:'flex',flexDirection:'column',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',color:'white',fontSize:'50px',margin:'5px'}}>↩</button></Link>
     </div>
      </>
    );
}

export default Recommend
