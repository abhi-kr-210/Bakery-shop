import React from 'react'
import { Container, Row ,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import delievryboy from "../../assets/delievryboy.png";
function Section7() {
  return (
    <div>
    <section className='contact_section'>
     <Container>
     
     <Row className='justify-content-center justify-content-between'>
       <Col sm={6} lg={6} className=' text-center'>
         <h4>WE GUARANTEE</h4>
         <h2>30 MINUTES DELIVERY!</h2>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ac massa quis elit maximus ullamcorper. Ut euismod, lectus 
          nec suscipit porta, lectus nec suscipit porta,
         </p>
       <Link to="/" className="btn order_now btn_red explore_btn px-4 py-2 rounded-0">
          Call:999-444-5555
       </Link>
       
       </Col>
       <Col lg={6} className="mt-5">

       <img src={delievryboy} className="img-fluid" alt="delievryboy" />
       </Col>

     
     
     </Row>
     
     
     </Container>  
    </section>
    
    
    </div>
  )
}

export default Section7