import React from 'react'
import {Card} from 'react-bootstrap'

function RestaurantDetails({data}) {
  return (
    <Card className='p-3 mb-3'>
  <Card.Img variant="top" src={data.photograph}/>
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>
     {data.cuisine_type}
    </Card.Text>
    <Card.Text>
     {data.neighborhood}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default RestaurantDetails