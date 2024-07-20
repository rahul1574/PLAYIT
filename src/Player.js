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
        { title: "OY OY",cast:"Chandrabose,Siddharth, Prashanthini",image:"image7.jpg", src: "song9.mp3", lyrics :`
Noota debbai aaru beach
house lo prema devathaa...
Yellow chudidaar white
chunni tho doche naa yedaa...
Oye oye antu
casualga pilichero...
Oye oye twenty saarlu
kallo kalisero...
Oye oye empty gunde
ninda nilichero...
Oye oo oo.....
Love at first sight
naalo kalige..
Love at first sight
nannu kadipe..
Love at first sight
naake dorke..
Love at first sight
nannu korike....
Noota debbai aaru beach
house lo prema devathaa...
Roopamlona beautiful
chethallona dutyful
Maatallona fundamental....
Annitlona capable..
andarilona careful..
antheleni sentimental...
Cinemalo meriseti paapa..
citylona dorakadu raa...
Nijamgaane thagilenu thaara
Vizag nagarapu chivarana....
Jhal jhal jarige..
love at first sight..
Chill kalige..
love at first sight
Pal pal perige..
love at first sight
paikedige....
Hey hey
Dabbantene allergy
bhakthantene energy
Nammuthundi numerology..
Inti mundu nursery
antaneedu allari
Oppukodu humorology...
Oo..
Undaalsindi
thana borderlo..
Cheraalsindi
militarylo...
Edo undi
something thanalo
Laagindi
manasunu chitikelo
Some sambarame...
love at first sight
Wah varame..
love at first sight
Oo oo kshaname..
love at first sight
o yugame...
Noota debbai aaru beach
house lo prema devathaa...
Yellow chudidaar white
chunni tho doche
naa yedaa...
Oye oye
antu casualga pilichero...
Oye oye
twenty saarlu
kallo kalisero...
Oye oye
empty gunde
ninda nilichero...
Oye oo oo...
Love at first sight
naalo kalige..
Love at first sight
nannu kadipe..
Love at first sight
naake dorke..
Love at first sight
nannu korike..
Love at first sight
naalo kalige..
Love at first sight
nannu kadipe..
Love at first sight
naake dorke..
Love at first sight
nannu korike...`},
        { title: "CHIRUNAVVE VISIRAVE",cast:"Vijay Prakash",image:"image10.jpg", src: "song12.mp3", lyrics:`
Chirunavve visiraave nidurinche kalapai...
Sirimuvvai nadichaave ninukoreti ee gundepai...
Velugedo parichaave... ninnu choosthunna naakallapai...
Chirunavve visiraave nidurinche kalapai...
Sirimuvvai nadichaave ninukoreti ee gundepai....
Sarada saradalenno andinchaave...
Samayam gurutheraani saavaasamtho...
Viraham cheralo nanne bhandinchaave..
Yepudu maruperaani nee andamtho...
Ahvanam pampinchave Anandam rappinchaave..
Reppallona thrulle choopultho...
Aaraatam vurinchaave momaatam maarinchaave
Cheruvalona chese dooramtho....
Cheliyaa aa aaa aaa....
Chirunavve visiraave.. nidurinche kalapai...
Sirimuvvai nadichaave.. ninukoreti ee gundepai..
Asale vayase nannu tharimesthunte..
Apude yedurouthaavu em cheyyale...
Asali thadabatentani adigesthunte..
Sariga namminche badulem cheppale...
Thappedo chesthunnattu thappinchukuntunnattu
Yennalinka kaalam gadapaale...
Neekosam nenunnattu neepranam nammetattu
Evvarithona kaburampinchaale...
Cheliyaa aa aaa aaa....
Chirunavve visiraave nidurinche kalapai..
Sirimuvvai nadichaave ninukoreti ee gundepai..
Velugedo parichaave ninnu choosthunna naakallapai..
Chirunavve visiraave nidurinche kalapai..
Sirimuvvai nadichaave ninukoreti ee gundepai....`},
        { title: "KANNULO UNNAVU",cast:"Hariharan,Saindhavi,Vijayalakshmi", image:"image12.jpg",src: "song14.mp3", lyrics :`
Kannullo Unnaavu...
Naa Kanti Paapavai....
Gundello Nindaavu..
Naa Gunde Savvadai...,
Nee Ooha Naaku Oopirai..
Naaloki Cherukunnadhi..
Nee Peru Praananaadi Ayinadhi...
Oo Oo OoOo Oo...
Kannullo Unnaavu..
Naa Kanti Paapavai...
Gundello Nindaavu..
Naa Gunde Savvadai...
Ubhayakushala Chirajeevana
Prasthutha Bharitha Manjulathara
Shrungaare.. Sanchaare...
Adhraruchitha Madhurithabhaga
Sudhanakanaka Prasamaniratha
Baandhavye Mangalye...
Mamathamasaku Samadhasasatha
Mudhamanasutha Sumanalayiva
Susuthasahithagaamam..
Viraharahitha Bhaavam..
Aanandha Bhogam..Aa
Jeevakaalam Paashaanubandham
Thaalaanukaalam...
Dhaivaanukoolam Kaamyaardhasiddhim
Kaa Maye...
Hrudhayaanni Thaake
Nee Navvu Naadhe..
Udhayaanni Dhaache
Kurulinka Naave...
Odilona Vaale Nee
Momu Naadhe..
Madhuraalu Dhoche
Adharaalu Naave...
Neelo.. Parimalam..
Penchindhe Paravasham...
Nee Choopu Nunchi
Prema Pongene...
Oo OoOo Oo Oho Ho....
Kannullo Unnaavu..
Naa Kanti Paapavai...
Gundello Nindaavu..
Naa Gunde Savvadai...
Edhedho Aasha
Kadhilindhi Naalo..
Thelapaalanante
Saripodhu Janma...
OoOo Ye Janmakainaa
Untaanu Neelo..
Ye Chotanainaa
Ninu Veedanamma....
Kaalam.. Mugisina Ee...
Bandham Mugiyunaa...
Nee Choopu Nunchi
Prema Pongene...
Oo OoOo Oo Oho Ho...
Kannullo Unnaavu..
Naa Kanti Paapavai...
Gundello Nindaavu..
Naa Gunde Savvadai...
Nee Ooha Naaku Oopirai..
Naaloki Cherukunnadhi..
Nee Peru Praananaadi
Ayinadhi.....
Oo Oo OoOo Oo...
Kannullo Unnaavu..
Naa Kanti Paapavai...
Gundello Nindaavu..
Naa Gunde Savvadai....`},
        { title: "NEE CHOOPULE",cast:"Haricharan and K. S. Chithra",image:"image13.jpg", src: "song15.mp3", lyrics :`
Nee choopule.. naa oopiri...
Osarila.. choode cheli..
Amavasanai.. unna mari..
Andinchave.. deepavali...
Enduke cheliya reppala valalo odhigina kalala...
Kanupapalu vethike repati velugunu chusi chudavela…
Nayanam.. hrudayam neeve neevai...
Samayam..venuke chesa payanam...
Tadupari janmakaina jaali chuse veelundhante..
Ee kshanaana oopiraapana…
aaa.aaa…aa…aa…aaa…
aaa.aaa…aa…aa…aaa…
Roju kotthaga.. nee sandarshanam..
Ahaa annadi.. nalo spandanam...
Nithyam nuvvila.. nakai choodatam...
Entho vinthaga.. undhee anubhavam...
Nadi vesavi lo marigisthune muripisthonde ni challadanam..
Yedha mantantha dachesthu vennelayindhi prema gunam...
Neekai veche nittoorupule thoorupu kanee...
Nee thalapulalo talamunakavani enno janmalani...
Nayanam.. hrudayam.. neeve neevai...
Samayam.. venuke.. chesa payanam...
Tadupari janmakaina jaali chuse veelundhante...
Ee kshanaana oopiraapana…
Nitho.. bandhame raasindevvaro...
Ninne.. nakila chupindevvaro...
Nanneevaipuga.. laagindevvaro...
Ninne.. choodaga aapindevvaro...
Daridaapullo padigapullo nilicha neerai darullo...
Tholi velugalle vastale kalise repati poddhullo...
Nee choopule.. naa oopiri...
Osarila.. choode cheli...
Amavasanai.. unna mari...
Andinchave.. deepavali...
Enduke cheliya reppala valalo odhigina kalala..
Kanupapalu vethike repati velugunu chusi chudavela…
Nayanam aa.. hrudayam aa.. neeve aa.. neevai aa..
Samayam aa.. venuke aa.. chesa aa.. payanam
Tadupari janmakaina jaali chuse veelundhante..
Ee kshanaana oopiraapana…
aaa.aaa…aa…aa…aaa…
aaa.aaa…aa…aa…aaa…`},
        { title: "EDO PRIYA RAGAM VINTUNNA",cast:"Sirivennela Seetharama Sastry,Sumangali", image:"image14.jpeg",src: "song17.mp3", lyrics :`
yedo.. priyaraagam vintunnaa.. chirunavullo..
premaa aa sandadi needenaa...
yedo.. nava naatyam choostunnaa.. sirimuvvallo..
premaa aa savvadi needenaa...
ittaage kalakaalam choodaalanukuntunnaa..
itupaina ee swapnam kariginchaku emaina...
premaa o premaa chirakaalam naavente....
nuvvunte nijamegaa swapnam..
nuvvunte prati maata satyam..
nuvvunte manasantaa edo teeyani sangeetam...
nuvvunte prati adugu andam..
nuvvunte prati kshanamu swargam..
nuvvunte ika jeevitamantaa edo santosham...

paata paadada mounam.. puri vippi aadada praanam...
adavinaina poodota cheyada premabaatalo payanam...
daarichoopada soonyam.. aracheta vaalada swargam..
elladaati paravallu tokkada velluvaina aanandam..
premaa nee saawaasam naa swaasaku sangeetam..
premaa nee saannidhyam naa oohala saamraajyam...
premaa o premaa gundello kalakaalam....
nuvvunte prati aasa sontam..
nuvvunte chirugaale gandham..
nuvvunte endaina kaada challani saayantram...
nuvvunte prati maata vedam..
nuvvunte prati paluku raagam..
nuvvunte chirunavvulatone nindenu ee lokam...

unnachota unnaana.. aakasamandukunnaana..
cheliyaloni ee kotta sambaram naaku rekka todigena..
munigi telutunnaana.. ee mucchataina muripaana...
aameloni aananda saagaram nannu munchu samayaana...
hariville nannalle ee rangulu nee valle..
sirimallela vaagalle ee vennela neevalle..
premaa o premaa idi saaswatamanukona...
nuvvunte digulantuu raade..
nuvvunte velugantuu pode..
nuvvunte mari maatalu kooda paataipotaaye...
nuvvunte edurantuu lede..
nuvvunte alupantuu raade..
nuvvunte e kashtaalaina ento ishtaale....
`},
        { title: "UPPENANTHA",cast:"Balaji,Devi Sri Prasad & KK", image:"image15.jpeg",src: "song19.mp3", lyrics :`
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Ee bhashe enduko..
Thiyyanaina ee badhaki..
Uppu neeru kanta deniko
Reppapatu duuranike..
Viraham enduko..
Ninnu chuse ee kallaki..
Lokamantha inka enduko..
Rendu aksharala premaki..
Inni siksha lendukoo..
I love you....
Naa oopiri aagipoyina..
I love you....
Naa pranam poyina..
I loove you....
Naa oopiri aagipoyina..
I love you....
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..
Kanuloki vasthavu..
Kalalu narikesthavu..
Secondukosaraina champestavu…
Manchula untavu..
Manta peduthuntavu..
Venta padi naa manasu masi chesthavu..
Theesukunte nuvu oopiri..
Posukunta aayuve cheli
Guchukoke mullu la mari..
Gundello sara sari
I love you...
Naa oopiri aagipoyina..
I love you...
Naa pranam poyina..
I loove you...
Naa oopiri aagipoyina..
I love you...
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..
Chinukule ninu thaaki merisipothanante ..
Mabbule pogesi kalcheyana
Chelakale ni paluku..
Thirigi palikayante
Tholakare lekunda paatheyana
Ninnu kori poolu thakithe..
Narukuthanu poola thotane
Ninnu choosthe unna chotane..
Thodestha aa kallane..
I love you...
Naa oopiri aagipoyina..
I love you...
Naa pranam poyina..
I loove you...
Naa oopiri aagipoyina..
I love you...
Naa pranam poyina..
I loove you...
Naa oopiri aagipoyina..
I love you...
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..`},
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
        { title: "YEDHAKI OKA GAAYAM",cast:"Hesham Abdul Wahab,Divya S Menon", image:"image19.jpeg",src: "song28.mp3", lyrics :`
Manasa.. Manako.. Selave.. Selavu....

Musire.. Usulu Kanavaa?
Yedhaki Oka Gaayam..
Vadhalamandhi Praanam...
Chelimi Vidi Pantham...
Evaru Ika Sontham...
Kalatha Padi Hrudhayam...
Karaganandhi Mounam...
Gathamu Vidi Paasham...
Yedhi Ika Bandham...
Hey! Innaallu Nannu..
Vennanti Unna Needa Neevuga..
Konnaalle Antu Korindhi Nanne...
Veedamandhigaa...
Ninu Talache Prathi Thalape..
Pranayaana Sodhana...
Nanu Mariche Marukshaname...
Virahana Vedhana....`},
        { title: "POVADHE PREMA",cast:"Vanamali,Yuvan Shankar Raja",image:"image7.jpg", src: "song32.mp3", lyrics :`
Nannodhili,nida vellipothondhaa..
Kannodhali,choopu vellipothonda..
Vekuvane.. sandhe valipothondhe..
Chikatilo.. udhayamundipoyindhe...
Na yadhane..
Tholichina guruthika ninu thesthunna..
Ne jathalo...
Gadipina bathukika bali avuthunna..

Nuvvunte, nenunta premaaaa..
Povodhe, povodhe premaa...


Nannodhili, nida vellipothondhaa..
Kannodhali, chupu vellipothondaa...


Inni nallu ni vente..
Saguthunna na padham..
Venta padina adugeedhantundhe...
Oh oh oh...
Ninna dhaka ni rupam..
Nimpukunna kanu papee..
Nuvvu leka nanu niladhisthundhey...


Korukunna jeevithamee..
Cheruvaina ee kshaname...
Jaali leni vidhi rathee shapamainadhe....
Maru janmey....
Unnadhante brahma naina adigedhokkatey...
Janmantha...
Mammu thana aatalika sagani chote....


Nuvvunte, nenunta premaa..

Povodhe, povodhe premaa...


Nuvvunte,neenunta premaa..

Povodhe.. povodhe.. prema.....`},
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
        { title: "NUVVE NUVVE",cast:"Chitra, Vijay Prakash",image:"image21.jpeg", src: "song37.mp3",lyrics:`
        Nuvve nuvve.. naa manasantha nee navve..
        Nuvve nuvve.. naa kadile kalavaiyave..
        Naa prem, lokam nuvve..
        Priyathama, Hrudayama..
        Pranayama, Naa pranama..
        Priyathama, Hrudayama..
        Pranayama, Naa pranama...
        
        Nuvve nuvve.. naa manasantha nee navve...
        Nuvve nuvve.. naa kadile kalavaiyave..
        Naa prema lokam nuvve..
        Priyathama, Hrudayama..
        Pranayama, Naa pranama...
        
        Pinunchi gaalivente nuvvu nannu thakuthunte..
        Enkoncham korukona neesnehammm...
        Anukunte chinna maate pedavullo thena maate..
        Nee pere preminda naa kooSammm....
        Inthalo nuv sonthamai naalo vunnaa...
        Chaalani analenuga enthainaaa...
        Edo theepi aavedana...
        Priyathama, Hrudayama...
        Pranayama,Naa pranama...
        
        Kalale suryodayalu.. pagale chendrodayalu...
        Prethi phoota pandage neetho vunteee...
        Manasantha malle phoolu virabhoose parimalalu..
        Jathalona uhalona nuvvunte..
        Nenila, neekosame puttanani.. 
        Premapai, mummatiki vottaiyani.. 
        Nee prema kavalani....
        
        Priyathama, Hrudayama...
        Pranayama, Naa pranama...
        Nuvve nuvve.. naa manasantha nee navve...
        Nuvve nuvve.. naa kadile kalavaiyave...
        Naa prema lokam nuvve....
        Priyathama, Hrudayama....
        Pranayama, Naa pranama....` },
        { title: "VINARAA",cast:"Sachin Basrur",image:"image22.jpeg", src: "song38.mp3",lyrics:`
        Vinaraa, Vinaraa.. Ee Pagalu Vairam
        Madhyana Thyaagamraa...
        Vinaraa, Aa Pagalu Vairam..
        Madhyana Snehamraa...
        
        Vinaraa, Ragile Mantala
        Madhyala Mancheraa...
        Vinaraa, Marige Garalam
        Madhyana Jeevamraa...
        
        Krodhaale Nindina Lokamraa...
        Swaardhaale Antani Bandhamraa...
        Maata Ichaado..
        Thaane Avthaaduraa.. Yeraa...
        Kopaginchaado..
        Thaane Avthaaduraa.. Soraa...
        
        Mosaale Nindina Lokamraa...
        Velantu Maravani Bandhamraa...
        Doosukochaado.. Thaane
        Avuthaaduraa Cheraa...
        Thaanu Nammaado..
        Vinane Vinadhantaraa... Moraa....` },
        { title: "KALALO KOODA",cast:"Bhaskarabhatla,Tanishk,Sid Sriram",image:"image23.jpeg", src: "song39.mp3",lyrics:`
        Ne kalalo kooda anukoledhe...
        Manasu isthavani..
        Naa kannula ninda..
        Rangu rangula kalalu testhavani...
        
        Nee kaali muvvalu.. chese sadi..
        Vintu gadipestaane...
        Asalinko janma vundo ledo..
        Manaki endukule..
        Prathi rojoka janma anukuntune..
        Preminchukundaame...
        
        Asalinko janma vundo ledo..
        Manaki endukule...
        Prathi rojoka janma anukuntune..
        Preminchukundaame...
        
        Naa madhi tarapuna
        Ney chebuthunna..
        Vadalanu vadalanu
        Ninnepudu...
        
        Evarevarevaro emanukunna..
        Okariki okaram manamipudu...
        
        Nuvvu naa.. oopire...
        Brathikedela vadilithe..
        Gundelo.. vecchaga...
        Daachanu kada andhuke...
        
        
        Naa kalla mundu
        Nuvvu leni... nimishamaina
        Adhorakam digulu...
        
        Mana madhyaki doore..
        Gaaliki kooda..
        Gaaladanivvodhe...
        
        Mana allari chuste.. nidharakaina
        Niddhara pattodhe.....` },
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
