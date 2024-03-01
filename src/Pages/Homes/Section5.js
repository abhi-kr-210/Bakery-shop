import React from 'react'
import { Container, Row, Col,Carousel  } from "react-bootstrap";
import { Link } from 'react-router-dom';
import android from "../../assets/play-store-logo.png";
import ios from "../../assets/app-store-apple.png";
import mobile_app from "../../assets/mobile_app_bakery1.png"
import brand1 from "../../assets/brands_logo/brand1.png";
import brand2 from "../../assets/brands_logo/brand2.png";
import brand3 from "../../assets/brands_logo/brand3.png";
import brand4 from "../../assets/brands_logo/brand4.png";
import brand5 from "../../assets/brands_logo/brand5.png";
import brand6 from "../../assets/brands_logo/brand9.png";
import brand7 from "../../assets/brands_logo/brand7.png";
import brand8 from "../../assets/brands_logo/brand8.png";

function Section5() {
  return (
    <div>
    <section className='shop_section'>
   
    <Container>
    <Row className="align-items-center">
   
      <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0 ">
        <h4>Download mobile App and</h4>
        <h2>save up to 20%</h2>
        <p>
          Aliquam a augue suscipit, luctus neque purus ipsum and neque
          dolor primis libero tempus, blandit varius
        </p>
         <div className='image_logo'>
         <Link to="/">
         <img src={ios} alt="IOS" className="img-fluid store me-3" />
         
       </Link>
       <Link to="/">
         <img src={android} alt="Android" className="img-fluid store me-3" />
       </Link>
         </div>
      </Col>
    <Col lg={6}>
    <img src={mobile_app} alt="app" className="img-fluid " />
    </Col>
    </Row>
  </Container>
    
    </section>
    <section className='brand_section'>
       <Container>
        <Row>
        <Carousel>
        <Carousel.Item>
        <div className="d-flex align-items-center justify-content-between">
        <div className="brand_img">
          <img src={brand1} className="img-fluid" alt="brand-1" />
        </div>
        <div className="brand_img">
          <img src={brand2} className="img-fluid" alt="brand-2" />
        </div>
        <div className="brand_img">
          <img src={brand3} className="img-fluid" alt="brand-3" />
        </div>
        <div className="brand_img">
          <img src={brand4} className="img-fluid" alt="brand-4" />
        </div>
        <div className="brand_img">
          <img src={brand5} className="img-fluid" alt="brand-5" />
        </div>
        <div className="brand_img">
          <img src={brand6} className="img-fluid" alt="brand-6" />
        </div>
      </div>
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex align-items-center justify-content-between">
        <div className="brand_img">
          <img src={brand3} className="img-fluid" alt="brand-3" />
        </div>
        <div className="brand_img">
          <img src={brand4} className="img-fluid" alt="brand-4" />
        </div>
        <div className="brand_img">
          <img src={brand5} className="img-fluid" alt="brand-5" />
        </div>
        <div className="brand_img">
          <img src={brand6} className="img-fluid" alt="brand-6" />
        </div>
        <div className="brand_img">
          <img src={brand7} className="img-fluid" alt="brand-7" />
        </div>
        <div className="brand_img">
          <img src={brand8} className="img-fluid" alt="brand-8" />
        </div>
      </div>
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
        
        </Row>
       
       </Container>
    
    </section>
    
    </div>
  )
}

export default Section5