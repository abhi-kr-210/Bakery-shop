import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/promo_img_combo12.png"
import "../../Styles/HomeStyle.css"
function Section4() {
  return (
    <div>
      <section className='promo_section'>
      
      <Container>
      <Row className='align-items-center'>
        <Col lg={6} >
        <img src={img1} className="img-fluid " alt="chef" />
        </Col>
        <Col lg={6} className="mt-lg-0 mt-5">
        <h2>Nothing unites food enthusiasts like the aroma of freshly baked bread</h2>
        <p>
        Porta semper lacus cursus, feugiat primis ultrice a ligula risus
        auctor an tempus feugiat dolor lacinia cubilia curae integer
        orci congue and metus integer primis in integer metus        
        </p>
        <ul>
          <li>Porta semper lacus cursus, feugiat primis ultrice auctor an tempus feugiat dolor 
          lacinia cubilia curae integer.</li>
          <li>Porta semper lacus cursus, feugiat primis ultrice
          orci congue and metus integer primis in integer metus.</li>
          <li>Porta semper lacus cursus, feugiat primis ultrice us integer primis .</li>       
        </ul>       
        </Col>     
      </Row>
      </Container>
      
      </section>
  

      {/* BG Parallax Scroll */}
      <section className="bg_parallax"></section>
    
    </div>
  )
}

export default Section4