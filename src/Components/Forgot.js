import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import{Link} from "react-router-dom";
function Forgot() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    // Mapping of email addresses to names
    const emailToNameMap = {
        'rahulmudavath333@gmail.com': 'John Doe',
        'example2@example.com': 'Jane Smith',
        // Add more mappings as needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = emailToNameMap[email] || 'there'; // Default to 'there' if no name is found

        const templateParams = {
            to_name: name,
            to_email: email,
            subject,
        };

        emailjs.send('service_uvatmzr', 'template_bb2tdsd', templateParams, 'OvCLRYSeO6XzFSpH3')
            .then((response) => {
                // alert('Email sent successfully');
                document.getElementById('append').style.display='block'
                document.getElementById('form').style.display='none'
                document.getElementById('append2').style.display='flex'
            }, (error) => {
                alert('Error sending email: ' + error.text);
            });
    };

    return (
        <div style={{ height:'600px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
            <h1 style={{color:'white'}}>VIBE-TOUCH</h1>
            <form id='form'onSubmit={handleSubmit}style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}} >
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                        style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder='username'
                        style={{textAlign:'center',background:'transparent',boder:'none',color:'white'}}
                    />
                </div>
                <button type="submit" style={{height:'40px',width:'200px',backgroundColor:'#14213d',color:'white',border:'none',borderRadius:'20px',margin:'30px'}}>Get Password</button>
                <Link to='/signin'><button style={{border:'none',background:'transparent',display:'flex',flexDirection:'column',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',color:'white',fontSize:'50px',margin:'5px'}}>↩</button></Link>
            </form>
            <div id='append2' style={{height:'700px',display:'none',flexDirection:'column',justifyContent:'flex-start',alignContent:'center',alignItems:'center',textAlign:'center'}}>
              <img src='monkey.png' alt='' style={{height:'350px'}}></img>
             <p id='append'style={{height:'70px',fontSize:'15px',width:'350px',color:'green',background:'black',display:'none',alignContent:'center',boxShadow:'0px 0px 20px #ffea00',border:'none',borderRadius:'12px'}}>Your password will be send to your E-mail within short time....</p>
             <Link to='/signin'><button style={{border:'none',background:'transparent',display:'flex',flexDirection:'column',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',color:'white',fontSize:'50px',margin:'5px'}}>↩</button></Link>
            </div>
        </div>
    );
}

export default Forgot
