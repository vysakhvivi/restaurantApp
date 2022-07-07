import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RestaurantDetails({data}) {
  return (
    <Link to={`info/${data.id}`}>
      <Card className='my-3 p-3 rounded'>
        <Card.Img variant="top" src={data.photograph} className='p-3'/>
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
    </Link>
  )
}

export default RestaurantDetails