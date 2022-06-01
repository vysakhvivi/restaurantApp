import React from 'react'
import {useState, useEffect} from 'react'

function Home() {


    const [hotel,sethotel]=useState([])

    useEffect(() => {
      const fetchdata=async()=>{
          await fetch('/restaurants.json')
          .then(res=>res.json())
          .then(data=>sethotel(data.restaurants))
      }
      fetchdata()
    console.log('restaurants are',hotel);
      return () => {
        
      }
    }, [])
    

  return (
    <div>
    <h2>Home is Working// </h2>
    </div>
  )
}

export default Home