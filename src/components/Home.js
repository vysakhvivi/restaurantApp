import React from 'react'
import { useState, useEffect } from 'react'
import { Col ,Row} from 'react-bootstrap'
import RestaurantDetails from './RestaurantDetails'

function Home() {


  const [hotel, sethotel] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      await fetch('/restaurants.json')
        .then(res => res.json())
        .then(data => sethotel(data.restaurants))
    }
    fetchdata()
    console.log('restaurants are', hotel);
    return () => {

    }
  }, [])


  return (
    <Row>
      <Col sm={12} lg={4} md={6} xl={3} >
        {hotel.map(item => (
          <RestaurantDetails data={item}>

          </RestaurantDetails>
        ))
        }
      </Col>
    </Row>
  )
}

export default Home