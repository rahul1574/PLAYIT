import './Style.css';
import{Link} from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
// import AudioPlay from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loopEnabled, setLoopEnabled] = useState(false);
    const playlist = [
        { title: "HOSAAHOREY",cast:"Ananth Sreeram,K.K., Lesle Lewis", image:"image5.jpeg",src: "song6.mp3",lyrics:`
        Hosahare..... Hosahore.....
        Saadhinche sattuva unnadhi gundelalo..
        Preminche mettani manasula moolalalo...
        Maa paata aksharamodalaka vinnado....
        Painunna jacksonu kindhiki diguthado
        Hosahare hosahore hey....
        Hosahare..... Hosahore.....
        Gundello na paata guitar ai mogindhe...
        Yeye yayiye yehe yayiye.....
        Chetullo na raatha chappatlai cherindhe..
        Yehe yayiye yehe yayiye.....
        Kashtam neeku nesthamavaga..
        Vijayam ninnu ishtapadadha..
        Nee sangeetham nee radham
        Mundhuku saagupadha...
        Premanna aayudham toduga undhi kada...
        Hosaho hosaho hosahore hosaho... re....
        Ye desam lo aina sandesam maa paate
        Yeye yayiye yehe he hey...
        Ye vedika pai aina veduka ra ma aate
        Yehe yayiye yehe he he hey...
        Ningi nela nadi madhyana..
        Ponge ganga ma bhavana... hey
        Pedilla gonthulu kalasina kaalam idhe...
        Pedala vedini chaatina vela idhe he he he he hey...
        Hosahare.... hosahore....
        Saadhinche sattuva unnadhi gundelalo..
        Preminche mettani manasula moolalalo..
        Maa paata aksharamodalaka vinnado...
        Painunna jacksonu kindhiki diguthado..
        Hosahare.... hosaho hosaho hosaho hosaho
        Hosaho hosaho hosaho hosaho hosaho...`},
        { title: "PRAANAMA",cast:"Ananth Sreeram,Rahul Nambiar",image:"image5.jpeg",src: "song33.mp3", lyrics :`Ta na na na na na Ta na na na na na....

        Pranama.. pranama...
        arey sandramlaga pongaave eerojuna..
        Siri varsham laaga kurisave edachatuna..
        Choopulatho emcheppave anthaga..
        Oopiritho mudipettave vinthaga...
        
        Ta na na na na na....
        
        Ninna monna leni, santhoshala baani..
        Vintunnane.. mellaga eechota...
        China pedda cheri, choosthu unna gaani..
        Aagelaaga ledika nee aata...
        
        Dooranne dooranga, toosave mounanga..
        Praayalu pulakinchu ee malupulo...
        
        Sa pa ma pa da ma ga..
        ma ma pa da ma ga...
        
        Sa pa ma pa da ma ga..
        ma ma pa da ma ga...
        Ni da ni ma da ma pa..
        
        pa ma pa da ma ga..
        ma ma pa da ma ga..
        Ni da ni ma da ma pa...
        Ga ma pa ni sa sa ni ni sa sa ni ni ni da sa ni da..
        Sa ni sa sa ni ma di sa sa ni sa ga ni da pa ma da ma ri ma ri sa ri sa..
        
        Ta na na na na na...
        
        Gilli kajjalanni malli, gurtocheyla..
        Gadichayamma rojulu hayi hayiga...
        Ennalaina gaani, epudugurtundela..
        Nilichayamma navvulu ee teeyaga ho…
        
        Ee janma lo naina ye janma lonaina tana janta ga nannu nadipinchaga...
        
        Pranama.. pranama... pranama....
        Pranama.. pranama... arey sandramlaga pongaave eerojuna...
        Siri varsham laaga kurisave edachatuna..
        Choopulatho emcheppave anthaga..
        Oopiritho mudipettave vinthaga....
        
        Tana nana nana.....`},
        { title: "NEEVE",cast:"Ananth Sreeram,G. V. Prakash Kumar",image:"image5.jpeg", src: "song20.mp3", lyrics :`Neeve Neeve… Neeve Neeve…
        Neeve Neeve… Neeve Neeve…
        Neeve Neeve… Neeve Neeve…
        Neeve Neeve… Neeve Neeve…
        Edaina nee tharuvathe anipisthundhey ila…
        Yemaina adhi nee valley jariguntundhey elaa..
        Edhirosthuney Vunnavey, ne Ey daarilo velthunna..
        Kadhilisthuney Vunnavey, ne nekantham lo Vunna..
        Maripisthuney Vuntavey, nakem Yem em gurthosthunna..
        Muripisthuney Vuntavey, na mundhey nuvvulekunna....
        Neeve Neeve ... Neeve Neeve
        Neeve Neeve.... Neeve Neeve
        Follow him around.. above to the town..Baby check me with u, I am with u, show me all around..hey
        Follow him around.. above to the town..Baby check me with u, I am with u, show me all around...
        Na na na na naa....
        Gonna get you gonna get you..
        Na na na na naa....
        Gonna get you gonna gonna get you...
        Oka nimisham lo na santhosham,
        Oka nimisham lo na sandheham..
        Nidhurana kuda hey ni dhyaanam..
        vadhaladhu nanne oh nee roopam....
        Nuvvey….Nuvvey.. Nuvvey....
        Alochisthu pichodnayya neney….cheliyaa.....
        Edhirosthuney Vunnavey, ne Ey daarilo velthunna..
        Kadhilisthuney Vunnavey, ne nekantham lo Vunna..
        Maripisthuney Vuntavey, nakem em em gurthosthunna..
        Muripisthuney Vuntavey, na mundhey nuvvulekunna...
        Neeve Neeve ... Neeve Neeve..
        Neeve Neeve.... Neeve Neeve..
        Nadakalu saagedhi nee vaipe…palukulu aagindhi nee valle..
        Evariki chebutunna nee oosey, chivariki neenayya nee laaney..
        Nuvvey……hey hey…Nuvvey..Nuvvey....
        Chuttu antha thittesthunna neney…vinaney…
        Edhirosthuney Vunnavey, ne Ey daarilo velthunna..
        Kadhilisthuney Vunnavey, ne nekantham lo Vunna..
        Maripisthuney Vuntavey, nakem em em gurthosthunna..
        Muripisthuney Vuntavey, na mundhey nuvvulekunna....
        Neevey..Neevey..Neevey…..Neevey……..
        Neevey...Neevey..Neevey…..Neevey……..
        Yedhyna nee tharuvathey anipisthundhey ila…
        Yemaina adi nee valley jariguntundhey Yela…
        `},
        { title: "Theme of kalki",cast:"Chandrabose,Kaala Bhairava, Gowtham",image:"image24.jpeg", src: "song40.mp3",lyrics:`
        Adharmaanni Anicheyyaga..
        Yuga Yugaana Jagamulona..
        Pari PariVidhaallona Vibhavinche
        Vikrama Virat Roopamithade…
        
        Swadharmaanni Parirakshinchaga..
        Samasthaanni Prakshaalinchaga..
        Samudbhavinche Avataaramidhe....
        
        Meenamai, Pidhapa Koormamai...
        Thanu Varaahamai...
        Manaku Saayamai...
        Baanamai, Karaku Khadgamai..
        Churuku Ghaatamai..
        Manaku Oothamai…
        
        Nishi Tholichaadu Deepamai..
        Nidhanam Thana Dhyeyamai....
        Vaayuve.. Vegamai....
        Kaliyugaa Sthithi Layale..
        Kalabose..  Kalki ithade…
        
        Swadharmaanni Parirakshinchaga..
        Samasthaanni Prakshaalinchaga..
        Samudbhavinche Avataaramidhe....
        
        Praarthano.. Madhura Keerthano...
        Hrudaya Vedhano...
        Mana Nivedhanam....
        
        Andhithe, Manavi Takshanam...
        Manaku Sambhavam...
        Athadi Vaibhavam....
        
        Adharmaanni Anicheyyaga
        Yuga Yugaana Jagamulona...
        Pari PariVidhaallona Vibhavinche
        Vikrama Virat Roopamithade…
        
        Swadharmaanni Parirakshinchaga
        Samasthaanni Prakshaalinchaga
        Samudbhavinche Avataaramidhe…` },
        // Add more songs as needed
    ];

    useEffect(() => {
        const audioElement = audioRef.current;
        const updateCurrentTime = () => setCurrentTime(audioElement.currentTime);
        const updateDuration = () => setDuration(audioElement.duration);

        audioElement.addEventListener('timeupdate', updateCurrentTime);
        audioElement.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audioElement.removeEventListener('timeupdate', updateCurrentTime);
            audioElement.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    useEffect(() => {
        if (currentSongIndex !== null) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSongIndex]);

    const playHandler = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pauseHandler = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    // const stopHandler = () => {
    //     audioRef.current.pause();
    //     audioRef.current.currentTime = 0;
    //     setIsPlaying(false);
    // };

    const nextSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const prevSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    };

    const onEndedHandler = () => {
        nextSongHandler();
    };
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const [btnexpand,setbtnexpand]=useState(false)
    const handleExpand = () => {
        if (!isExpanded) {
            if(!btnexpand)
            setIsExpanded(true);
            setbtnexpand(true)
        }
    };
    const handleReset = () => {
        setIsExpanded(false);
        setbtnexpand(false);
    };
    const toggleLoop = () => {
        setLoopEnabled(!loopEnabled);
        audioRef.current.loop = !loopEnabled;

    };
    return (
        <>
        <div className="navbar">
          
          <div to="/Intro" id="photo"></div>
          <Link  to="/Power" ><i id="three" class="fa-solid fa-power-off"></i></Link>
          <Link to="/home"><i id="two" class="fa-solid fa-house"></i></Link>
       </div>
        <div>
            <div>
                {playlist.map((song, index) => (
                    <div key={index} className='box' onClick={() => setCurrentSongIndex(index)}style={{ height:"60px",fontSize:"18px",padding:"5px",backgroundColor:"transparent",cursor: 'pointer', margin: '10px',display:"flex",justifyContent:"space-equaly",flexDirection:"column",border:"1px solid black"}}>
                        {song.title}
                        <div key={index} onClick={() => setCurrentSongIndex(index)}  style={{fontFamily:"Helvetica",fontSize:"15px",color:"#8b8c89",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",backgroundColor:"transparent"}}>
                          {song.cast}
                           <div key={index} onClick={() => setCurrentSongIndex(index)} style={{height:"50px",width:"50px",backgroundColor:"transparent",display:"flex",flexDirection:"row"}}>
                             <img id="image-size" src={song.image} alt=""/>
                           </div>
                        </div>
                    </div>
                ))}
    
            </div>
            <div  className={`nowplay ${isExpanded ? 'expanded' : 'collapsed'}`} >
                
                {currentSongIndex==null && (
                    <div id="man"  style={{ 
                        // backgroundColor: color, 
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly"
                      }}>
                        <div>
                        <img id="play-walk" src="play-walk.gif" alt=" "/>
                         </div>
                    </div>
                )}
                {currentSongIndex !== null && (
                    <>
                    <div>
                       {isExpanded && <button className={`btn ${btnexpand ? 'expand' : 'collapse'}`} onClick={handleReset} style={{backgroundColor:"transparent",border:"none"}}><i  id="close" class="fa-solid fa-xmark"></i></button>}
                    </div>
                    <button onClick={handleExpand} >
                        <img id="image-play" src="play.gif" alt=" "/>
                    </button>
                        <p>{playlist[currentSongIndex].title}</p>
                        <p>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                        <progress value={currentTime} max={duration}></progress>
                        { isExpanded && <div id="lyrics">
                            <div id="flow">{playlist[currentSongIndex].lyrics}</div></div>}
                        {isExpanded && <div id="hide"></div>}
                        <div id="controlbtn">
                           <button  className="songbtn1"onClick={prevSongHandler} disabled={currentSongIndex === null}>⏮</button>
                           {isPlaying ? (
                           <button  className="songbtn" onClick={pauseHandler} disabled={currentSongIndex === null}>⏸️</button>
                           ) : (
                           <button  className="songbtn" sonClick={playHandler} disabled={currentSongIndex === null}>▶️</button>
                           )}
                           {/* <button  className="songbtn"onClick={handleplay} disabled={currentSongIndex === null}>⏹️</button> */}
                           <button  className="songbtn1"onClick={nextSongHandler} disabled={currentSongIndex === null}>⏭</button>
                            {isExpanded && <button className="songbtn3" onClick={toggleLoop} style={{ marginLeft: '5px'}}>
                                {loopEnabled ? '🔂' : '🔁'}
                            </button>}
                        </div>
                    </>
                    
                )}
            </div>
            <audio id='play'
                ref={audioRef}
                src={currentSongIndex !== null ? playlist[currentSongIndex].src : ''}
                onEnded={onEndedHandler}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                controls 
            />
        </div>
        </>
    );
};

export default AudioPlayer;
