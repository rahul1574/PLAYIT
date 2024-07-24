import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import{Link} from "react-router-dom";
export const ContactUs = () => {
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
    const [image,setimage]=useState('eyeclose.PNG');
    const [type,settype]=useState('password');
    const handlechange=()=>{
        setimage((previmage)=>
           previmage==='eyeclose.PNG'?'eyeopen.PNG':'eyeclose.PNG'
           );
        settype((pretype)=>
        pretype==='password'?'text':'password'
        );
    }
    const [inputusername,setusername]=useState('')
    const [inputpassword,setpassword]=useState('')
    const [inputmail,setemail]=useState('')
    const checkvalue=()=>{
      if(inputusername.trim()==='' || inputpassword==='' || inputmail===''){
        alert('enter vaild input')
      }
      else{
        document.getElementById('append').style.display='block'
        document.getElementById('form').style.display='none'
        document.getElementById('append2').style.display='flex'
      }
    }
return (
  <>
<form ref={form}  id='form'onSubmit={sendEmail}style={{ height:'600px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',color:'white'}}><h1>VIBE-TOUCH</h1>
  <h4>~Be Together</h4>
  <input type="email" name="user_mail" value={inputmail} placeholder='Email' onChange={(e)=> setemail(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}}/>
  <input type="text" name="user_name" value={inputusername} placeholder='username' onChange={(e)=> setusername(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}} />
  <div>
    <input name="message" id='text'  type={type} value={inputpassword} placeholder='password' onChange={(e)=> setpassword(e.target.value)} style={{textAlign:'center',background:'transparent',boder:'none',color:'white',fontSize:'15px'}}/>
    <img src={image} alt="clickable" onClick={handlechange} id="show"style={{height:'20px',width:'20px',position:'relative',right:'35px',top:'3px'}}></img>
  </div>
  <input id="appendbtn" type="submit" value="Signup" onClick={checkvalue} style={{height:'40px',width:'200px',backgroundColor:'#14213d',color:'white',border:'none',borderRadius:'20px'}} />
  <p>I have a account? <Link to='/signin'>Signin</Link></p>
</form>
 <div id='append2' style={{height:'700px',display:'none',flexDirection:'column',justifyContent:'flex-start',alignContent:'center',alignItems:'center',textAlign:'center'}}>
    <img src='monkey.png' alt='' style={{height:'350px'}}></img>
    <p id='append'style={{height:'70px',fontSize:'15px',width:'350px',color:'green',background:'black',display:'none',alignContent:'center',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px'}}>Your account will be in active within short time....</p>
    <Link to='/start'><button style={{border:'none',background:'transparent',display:'flex',flexDirection:'column',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',color:'white',fontSize:'50px',margin:'5px'}}>↩</button></Link>
 </div>
</>
);
}