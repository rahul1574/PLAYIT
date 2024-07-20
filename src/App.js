
import React from 'react';
import './index.js';
import './App.css';
// import Home from './components/Home.js';
// import Topic1 from './components/Topic1.js';
// import Recommend from './components/Recommend.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Start from './Components/Start.js';
// import Topic2 from './components/Topic2.js';
// import Topic3 from './components/Topic3.js';
// import Topic4 from './components/Topic4.js';
// import Topic5 from './components/Topic5.js';
// import Topic6 from './components/Topic6.js';
// import Topic7 from './components/Topic7.js';
// import Topic8 from './components/Topic8.js';
// import Power from './components/Power.js';
// import Cap from './components/Cap.js';
// import {ContactUs}  from './components/ContactUs.js';
import Signin from './Components/Sigin.js';
import { ContactUs } from './Components/ContactUs.js';
import Forgot from './Components/Forgot.js';
import Home from './Components/Home.js';
import Power from './Components/Power.js';
import Recommend from './Components/Recomend.js';
import Report from './Components/Report.js';
import Topic1 from './Components/Topic1.js';
import Topic2 from './Components/Topic2.js';
import Topic3 from './Components/Topic3.js';
import Topic4 from './Components/Topic4.js';
import Topic5 from './Components/Topic5.js';
// import Start from './components/Start.js';
// import Navbar from './components/Navbar.js';
// import Signin from './components/Signin.js';
// import Forgot from './components/Forgot.js';
// import Report from './components/Report.js';

function App() {
  return (
    <>
        <Router>
    {/* <Navbar/> */}
    <Start/>
     <Routes>
          <Route path="/report" element={<Report/>}>
          </Route>
          <Route path="/forgot" element={<Forgot/>}>
          </Route>
         <Route path="/start" element={<Start/>}>
          </Route>
         <Route path="/recommend" element={<Recommend/>}>
          </Route>
         <Route path="/signup" element={<ContactUs/>}>
          </Route>
          <Route path="/signin" element={<Signin/>}>
          </Route>
          <Route path="/power" element={<Power/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/topic1" element={<Topic1/>}>
          </Route>
          <Route path="/topic2" element={<Topic2/>}>
          </Route>
          <Route path="/topic3" element={<Topic3/>}>
          </Route> 
          <Route path="/topic4" element={<Topic4/>}>
          </Route>
          <Route path="/topic5" element={<Topic5/>}>
          </Route>  
      </Routes>
      {/* <Cap/> */}
    </Router>
    </>
  );
}

export default App;
