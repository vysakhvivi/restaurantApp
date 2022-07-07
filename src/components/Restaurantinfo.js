import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import Rating from './Rating'
import {useSelector} from 'react-redux'



function Restaurantinfo() {

  const restaurantContents=useSelector(state=>state.restaurantList)

  const {restaurant} =restaurantContents
  // const [restaurants, setrestaurants] = useState([])

  const { id } = useParams()

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await fetch('/restaurants.json')
  //       .then((res) => res.json())
  //       .then((data) => setrestaurants(data.restaurants))
  //   }
  //   fetchdata();
  // }, [])

  const details = restaurant.find((i) => i.id == id)
  console.log(`details is`, details);

  return (
    <>
      <Link className='btn btn-outline-danger my-3' to="/">Back</Link>
      {details ? (
          <Row className='my-3'>
          <Col md={3}>
            <Image className='img' src={details.photograph} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h1>{details.name}</h1>
              <h3>{details.neighborhood}</h3>
              <h4 style={{color:"blue"}} >Cuisine: {details.cuisine_type}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 style={{color:"orangered"}}>Address: {details.address}</h4>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h4 className='py-3'>Operating Hours:</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Monday : {details.operating_hours.Monday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Tuesday : {details.operating_hours.Tuesday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Wednesday : {details.operating_hours.Wednesday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Thursday : {details.operating_hours.Thursday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Friday : {details.operating_hours.Friday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Saturday : {details.operating_hours.Saturday}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Sunday : {details.operating_hours.Sunday}</h5>
              </ListGroup.Item>
           
          </Col>
          <Col md={12} className='py-3'>
<h3 style={{textAlign:"center "}} className='py-3'>Reviews</h3>
              <Rating data={details.reviews}/>

          </Col>
          </Row>




      ) : "null"}
    </>
  )
}

export default Restaurantinfo