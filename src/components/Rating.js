import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Rating({data}) {
  return (
    <div className='rating'>
        {
        data.map((item)=>(
             <div>
                 <ListGroup.Item>
                     <h4>{item.name}</h4>
                        <h5>Date : {item.date}</h5>
                        <h5 style={{color:"orangered"}}>Rating : {item.rating}</h5>
                        <p>"{item.comments}"</p>
                 </ListGroup.Item>


             </div>

        )

        )}
    </div>
  )
}

export default Rating