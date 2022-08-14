import React , {useEffect, useState} from 'react'
import { Map, Draggable, Marker, Overlay } from "pigeon-maps"
import pin from '../images/pin.png';
import milk_pin from '../images/milk_bottle.png';
import milk from '../images/milk.png';
import curd from '../images/curd.png';
import paneer from '../images/panner.png';
import lassi from '../images/lassi.png';
import ghee from '../images/ghee.png';
import {AiFillCloseCircle} from 'react-icons/ai'
import Link from 'next/link';
import axios from 'axios';


const Home = () => {

  const [latitude ,setLatitude] = useState(null)
  const [longitude ,setLongitude] = useState(null)
  const [open, setOpen] = useState(false)
  const [pname, setPname] = useState('')
  const [anchor, setAnchor] = useState([])
  const [demo, setDemo] = useState([])
  const [b1, setB1] = useState(false)
  const [b2, setB2] = useState(false)
  const [b3, setB3] = useState(false)
  const [b4, setB4] = useState(false)
  const [b5, setB5] = useState(false)
  const [order, setOrder] = useState([])
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [data, setData] = useState([])

  // const handleOpen = () => {
  //   setOpen(true)
  //   setName(providers.name)
  // }

  useEffect(() =>{
    axios.get('http://localhost:5000/api/getProviders')
    .then((response) =>{
      setData(response.data) 
    })
    .catch((error) => console.log(error))
    setName(localStorage.getItem('name'))
    // setLink(`http://maps.google.co.uk/maps?q=${latitude},${longitude}`)
  },[])
  
  if(b1 && !order.includes('Milk')){
    setOrder([...order, 'Milk'])
    
  }
  else if(!b1 && order.includes('Milk')){
    for (var i = 0; i < order.length; i++) {
      if (order[i] === "Milk") {
        order.splice(i,1)
          }
        }
      }
      
      if(b2 && !order.includes('Curd')){
        setOrder([...order, 'Curd'])
      }
      else if(!b2 && order.includes('Curd')){
        for (var i = 0; i < order.length; i++) {
          if (order[i] === "Curd") {
            order.splice(i,1)
          }
        }
      }
      
      if(b3 && !order.includes('Paneer')){
        setOrder([...order, 'Paneer']);
      }
    else if(!b3 && order.includes('Paneer')){
      for (var i = 0; i < order.length; i++) {
        if (order[i] === "Paneer") {
          order.splice(i,1)
        }
      }
    }
    
    if(b4 && !order.includes('Lassi')){
      setOrder([...order, 'Lassi'])
    }
    else if(!b4 && order.includes('Lassi')){
      for (var i = 0; i < order.length; i++) {
        if (order[i] === "Lassi") {
          order.splice(i,1)
        }
      }
    }
    
    if(b5 && !order.includes('Ghee')){
      setOrder([...order, 'Ghee'])
    }
    else if(!b5 && order.includes('Ghee')){
      for (var i = 0; i < order.length; i++) {
        if (order[i] === "Ghee") {
          order.splice(i,1)
        }
      }
    }
    
    useEffect(() => setLink(`http://maps.google.co.uk/maps?q=${latitude},${longitude}`), [])
    useEffect(() =>{
        if ("geolocation" in navigator) {
            // console.log('Avaiable')
          }
          navigator.geolocation.watchPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setAnchor([position.coords.latitude.toFixed(3), position.coords.longitude.toFixed(3)])
            setDemo([position.coords.latitude+1, position.coords.longitude-1])
            // setLink(`http://maps.google.co.uk/maps?q=${latitude},${longitude}`)
            
            // setAnchor(position.coords.longitude)
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
          });
        },[])
        console.log(anchor)
        console.log(order)
        console.log(open)
        const maps_url = `http://maps.google.co.uk/maps?q=${latitude},${longitude}`
  return (
    <div>
      <div>
        
      
      <div className={open?'w-1/4 fixed rounded-xl bg-[#5fc5fb] z-20 right-0 h-full ':'hidden'}>
        <p><AiFillCloseCircle className='mx-auto text-3xl mt-5' onClick={()=>{setOpen(false)}}></AiFillCloseCircle></p>
        
        <h1 className='text-center mt-6 text-3xl font-bold'>{pname}</h1>
        <p className='mt-5 ml-4 text-lg'>Contact No.: Birjesh ka contact number</p>
        <p className='mt-3 mx-4 text-lg mb-3'>Address: Tere ghar k piche, teri khidki k niche</p>
        <div className='mx-4 '>
    
        <Map animate={true} height={200}  center={[latitude,longitude]} defaultZoom={18}>
        <Marker  anchor={[latitude,longitude]}>
        </Marker>
        </Map> 
        
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <p className='ml-4 text-lg'>Products Sold:</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Price</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Milk</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>120/kg</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Curd</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>200/kg</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Paneer</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>69/kg</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Lassi</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>69/kg</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>Ghee</p>
          </div>
          <div>
            <p className='ml-4 text-lg'>40/kg</p>
          </div>
        </div>
        <div className='flex space-x-4 mx-5 mt-8'>
          <button className='bg-orange-500 shadow-2xl text-white px-3 py-2 rounded-lg '>Download Lab Report</button>
          <Link href='/checkout'><button className='text-center shadow-2xl bg-orange-500 text-white px-3 py-2 rounded-lg'>Proceed further with this option</button></Link>          
        </div>

        
      </div>
        <div className='flex backdrop-filter backdrop-blur-lg border-b-2 absolute z-10 w-full items-center justify-between'>
        <h1 className=' font-Poppins text-4xl mx-4 my-3'>MilkyWay</h1>
        <p className='text-2xl mr-10'>Hi, {name}</p>
        </div>
        
    <div>
        <Map animate={true} height={600} center={[latitude, longitude]} defaultZoom={18}>
        <Marker  anchor={[latitude, longitude]} >
        </Marker>
        <button></button>
        {
          data.map((providers)=>{
            console.log(providers)
            return(
        <Draggable onDragStart={()=>{
          setOpen(true);
          setPname(providers.name);
        }} onDragMove={()=>{
          setOpen(true);
          setPname(providers.name);
        }} anchor={[providers.lat, providers.long]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Draggable>
            );
          })
        }
        {/* <Overlay  anchor={[28.48023399258176,77.00900000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay>
        <Overlay  anchor={[28.48023399258176,77.00700000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay>
        <Overlay  anchor={[28.48103399258176,77.00800000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay>
        <Overlay  anchor={[28.48103399258176,77.01000000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay>
        <Overlay  anchor={[28.48103399258176,77.01000000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay>
        <Overlay  anchor={[28.48103399258176,77.01100000000001]} >
        <img src={milk_pin.src} width={20} height={10} alt="Pigeon!" />
        </Overlay> */}
        </Map>
    </div>
      
    </div>
    <div className='rounded-2xl shadow-2xl bg-green-400 -mt-8 pb-8 absolute w-full text-white '>
        <h1 className='text-center py-8 text-black font-bold text-4xl'>What are you craving today?</h1>
        <div className='grid grid-cols-5 gap-8 px-10 '>
            <div className={b1?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB1(!b1)}}>
                <img src={milk.src} className='mx-auto h-52'></img>
                <p className='text-center text-2xl font-Poppins'>Milk</p>
            </div>
            <div className={b2?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB2(!b2)}}>
                <img src={curd.src} className='h-28 mt-12 mx-auto'></img>
                <p className='text-center text-2xl mt-10 font-Poppins'>Curd</p>
            </div>
            <div className={b3?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB3(!b3)}}>
                <img src={paneer.src} className='h-48 mx-auto'></img>
                <p className='text-center text-2xl font-Poppins'>Paneer</p>
            </div>
            <div className={b4?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB4(!b4)}}>
                <img src={lassi.src} className='mx-auto h-32 mt-8'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Lassi</p>
            </div>
            <div className={b5?'bg-amber-600 rounded-2xl':''} onClick={()=>{setB5(!b5)}}>
                <img src={ghee.src} className='h-32 mt-8 mx-auto'></img>
                <p className='text-center text-2xl mt-8 font-Poppins'>Ghee</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home