import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/team-11.jpg";
import Image2 from "../../assets/team-12.jpg";
import Image3 from "../../assets/team-13.jpg";
import "../../Styles/ChefsSection.css";
const mockData = [
    {
      id: "0001",
      image: Image1,
      name: "FULL NAME",
      designation:"Designation",

    },
    {
      id: "0002",
      image: Image2,
      name: "FULL NAME",
      designation:"Designation",

    },
    {
      id: "0003",
      image: Image3,
      name: "FULL NAME",
      designation:"Designation",

    },
]
function Section_chefs() {
  return (
    <div>
    <section className='chefs'>
    <Container>
    <Row className='chef_heading'>
    <Col lg={{span: 8, offset: 2}} className="text-center mb-5">  
    <h2>team Members</h2> 
     <h3>OUR MASTERS CHEFS</h3>
     <div className='section-title position-relative  mx-auto mb-5 pb-3'style={{maxWidth: '600px'}}></div>
   </Col>
   </Row>
      <Row>
      {mockData.map((chefimage,index)=>(
           
        <Col lg={4} key={index}>
      
          
          <div className="overflow-hidden chef_img_effect">

          <img src={chefimage.image} className="img-fluid " alt="chef" />
          </div>
          <div  className='info_box'>
             <h2>{chefimage.name}</h2>
             <h3>{chefimage.designation}</h3>
         
          
          </div>
        
        </Col>


      ))}
      
      </Row>
    </Container>
    
    
    
    </section>
    
    </div>
  )
}

export default Section_chefs