import React from 'react'
import { useState, useEffect } from 'react'
import { Col ,Row} from 'react-bootstrap'
import RestaurantDetails from './RestaurantDetails'
import { useDispatch,useSelector } from 'react-redux'
import { listRestaurants} from '../action/restaurantAction'

function Home() {

const dispatch=useDispatch()
const hotels=useSelector(state=>state.restaurantList)
const {restaurant}=hotels 

useEffect(() => {

  dispatch(listRestaurants())
}, [])



  return (
    <Row>
      {
      restaurant.map(item => (
      <Col sm={12} md={8} lg={6} xl={3}>
        

          <RestaurantDetails data={item}/>

          </Col>
      ))
       
      
      }
    </Row>
  )
}

export default Home