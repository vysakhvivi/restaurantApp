import React from 'react'
import './Footer.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit'
function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </a>

        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </a>

        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </a>

        <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </a>
      </section>

      

      <section className='mb-4'>
        <p>
          Restaurant Details.. 
        </p>
      </section>

      <section className=''>
        <MDBRow  >
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 me-auto'>
            <h5 className='text-uppercase f2' >Info</h5>

            <ul className='list-unstyled mb-0' >
              <li>
                <a href='#!' className='text-white'>
                  About us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Our Products
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Our Partners
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                Owners
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 '>
            <h5 className='text-uppercase f1'>Address</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Restaurant App
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Thiruvalla
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 Pathanamthita, Kerala
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  689544
                </a>
              </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      
      <a className='text-white' href='https://alrazi.com/'>
      © Restaurant
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer