import React,{useState} from 'react';
import{Link,useNavigate} from "react-router-dom";
export default function Signin() {
// Define separate lists for element1 and element2
const element1List = ['apple','banana', 'cherry'];
const element2List = ['date','elderberry', 'fig'];

const [element1Index, setElement1Index] = useState(-1);
const [element2Index, setElement2Index] = useState(-1);
const [element1, setElement1] = useState('');
const [element2, setElement2] = useState('');
const navigate=useNavigate();
const handleElement1Change = (event) => {
  const { value } = event.target;
  setElement1(value);
  const index = element1List.indexOf(value);
  if (index !== -1) {
    setElement1Index(index);
  } else {
    setElement1Index(-1);
  }
};

const handleElement2Change = (event) => {
  const { value } = event.target;
  setElement2(value);
  const index = element2List.indexOf(value);
  if (index !== -1) {
    setElement2Index(index);
  } else {
    setElement2Index(-1);
  }
};

const checkElements = () => {
  // Check if both elements are selected and in correct order
  return element1 !== '' && element2 !== '' && element1Index !== -1 && element2Index !== -1 && ((element1Index === 0 && element2Index === 0) || (element1Index===1 && element2Index===1));
};

const handleCheck = () => {
  const result = checkElements();
  if(result){
    document.getElementById('open').style.display='block';
    navigate('/home',{state:{element1}})
  }else{
    alert('Incorrect usernme or password');
    document.getElementById('open').style.display='none';
  }
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

return (
  <div style={{height:'600px',display:'flex',flexDirection:'column',alignContent:'space-evenly',alignItems:'center',justifyContent:'space-evenly'}}>
    <h1 style={{color:'white'}}>VIBE-TOUCH</h1>
    <h4 style={{color:'white'}}>~Be Together</h4>
    <div>
      <input
        type="text"
        value={element1}
        onChange={handleElement1Change}
        placeholder="username"
        style={{textAlign:'center'}}
      />
    </div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'end'}}>
      <div>
      <input
        type={type}
        value={element2}
        onChange={handleElement2Change}
        placeholder="Password"
        style={{textAlign:'center'}}
      />
      <img src={image} alt="clickable" onClick={handlechange} id="show"style={{height:'20px',width:'20px',position:'relative',right:'35px',top:'3px'}}></img>
      </div>
      <Link to='/forgot'> Forgot password?</Link>
    </div>
    <button  onClick={handleCheck} style={{height:'40px',width:'200px',backgroundColor:'#14213d',color:'white',border:'none',borderRadius:'20px'}}>Signin</button>
    <Link to='/home'><button id='open' style={{display:'none'}}>signin</button></Link>
    <p>Don't have a account?<Link to='/signup'>Signup</Link></p>
  </div>
);
};

