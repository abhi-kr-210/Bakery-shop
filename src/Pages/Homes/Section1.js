import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cake from "../../assets/cake_copy.png";

import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={cake} className="img-fluid cake_image" alt="Hero" />
              
            </div>
            <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
          </Col>
          <Col lg={5}>
            <div className="hero_section_col2">
              <h1 className="text-white">New Tuffle Cake</h1>
              <h2 className="text-white">With Choco Flavour</h2>
              <p className="text-white pt-2 pb-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;