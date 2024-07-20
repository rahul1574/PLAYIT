
import{Link,useLocation} from "react-router-dom";
export default function Home() {
  const location=useLocation();
  const {element1}=location.state ||{};
  const slideshow=()=>{
    document.getElementById('slide').style.display='block'
    document.body.style.overflow='hidden'
    document.getElementById('photo').style.display='none';
}
const slidehide=()=>{
    document.getElementById('slide').style.display='none'
    document.body.style.overflow='auto';
    document.getElementById('photo').style.display='block'
}
const movebody=()=>{
  document.body.style.overflow='auto'
}
  return (
    <>
     <div className="navbar">
      <div id="photo" onClick={slideshow}></div>
      <Link to="/Power" ><i id="three" class="fa-solid fa-power-off"></i></Link>
      <Link to="/home"><i id="two" class="fa-solid fa-house"></i></Link>
    </div>
    {/* <div id="home">
      <p id="text">Select your choice....</p>
    </div> */}
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
    <div  id="slide"style={{width:'600px',display:'none',backgroundColor:'#0b090a',alignContent:'baseline',textAlign:'start',transition:'transform 2s ease'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div id="photo" style={{height:'70px',width:'70px',backgroundSize:'cover',margin:'10px'}}></div>
        <div id="name"style={{alignContent:'center',color:'white'}}>{element1}</div>
      </div>
      <hr></hr>
      <Link to='/recommend'><div className='slidebox'style={{width:'200px',color:'white'}}><Link to='/recommend'>➕Recommend your song!</Link></div></Link>
      <div className='slidebox' style={{width:'200px',color:'white'}}><Link to='/report' >💬Repot a problem</Link></div>
      <Link to='/start'><div style={{width:'100px',margin:'20px'}}>Logout</div></Link>
      <button onClick={slidehide} style={{border:'none',background:'transparent',color:'white'}}><i class="fa-solid fa-arrow-left"></i></button>
    </div>
    <section id="list">
        <div className="list1">
         <Link  onClick={movebody} to="/topic1"><div id="topic1" className="listcontent">
         <i class="fa-solid fa-headphones"></i>
         <p>Telugu</p>
         </div></Link>
         <Link onClick={movebody} to="/topic2"><div id="topic2" className="listcontent">
         <i class="fa-solid fa-icons"></i>
         <p>Hindi</p>
         </div></Link>
         <Link onClick={movebody} to="/topic3"><div id="topic3" className="listcontent">
         <i class="fa-solid fa-guitar"></i>
         <p>Tamil</p>
         </div></Link>
         <Link onClick={movebody} to="/topic4"><div id="topic4" className="listcontent">
         <i class="fa-solid fa-music"></i>
         <p>Logi+Mashup</p>
         </div>
         </Link>
        </div>
        <div className="list2">
         <Link  onClick={movebody} to="/topic5"><div id="topic5" className="listcontent">
          <p>Prabhas</p>
         </div></Link>
        </div>
    </section>
    </div>
    </>
  )
}
