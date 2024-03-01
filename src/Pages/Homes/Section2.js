import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pastry from "../../assets/Pastery.png";
import Bread from "../../assets/Bread.png";
import Delivery from "../../assets/Delivery.png";

// Mock Data Cards
const mockData = [
  {
    image: Pastry,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image:Bread,
    title: "Quality Breads",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];
function Section2() {
  return (
    <div>
    <section className="about_section">
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="text-center">
          <h2>The cake tastes even more delightful when shared with loved ones.</h2>
          <p>
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae integer
            orci congue and metus integer primis in integer metus
          </p>
        
          <Link to="/" className="btn order_now btn_red explore_btn">
            Explore Full Menu
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
  <div className='front_view'>

  </div>
  <section className="about_wrapper">
  <Container>
    <Row className="justify-content-md-center">
      {mockData.map((cardData, index) => (
        <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
          <div className="about_box text-center">
            <div className="about_icon">
              <img
                src={cardData.image}
                className="img-fluid"
                alt="icon"
              />
            </div>
            <h4>{cardData.title}</h4>
            <p>{cardData.paragraph}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
    
    </div>
  )
}

export default Section2