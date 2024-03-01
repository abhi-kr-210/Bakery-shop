import React from 'react'
import { Container, Row,Carousel  } from "react-bootstrap";
import user1 from "../../assets/user_review/user1.jpg";
import user2 from "../../assets/user_review/user2.jpg";
import user3 from "../../assets/user_review/user3.jpg";
import user4 from "../../assets/user_review/user4.jpg";

function Section6() {
  return (
    <div>
   <section className='blog_section'>
   <Container>
   <Row>
   <Carousel fade>
   <Carousel.Item>
   <div className="user_img d-flex justify-content-center">
     <img src={user3} className="img-fluid" alt="user-3" />
   </div>
     <Carousel.Caption>
     <p>
     " Etiam sapien sem at sagittis congue augue massa varius
     sodales sapien undo tempus dolor egestas magna suscipit magna
     tempus aliquet porta sodales augue suscipit luctus neque "
   </p>
   <div className="item_rating mb-2">
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
   </div>
   <h5>BY AMELIE NEWLOVE</h5>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <div className="user_img d-flex justify-content-center">
     <img src={user2} className="img-fluid" alt="user-2" />
   </div>
     <Carousel.Caption>
     <p>
     " Etiam sapien sem at sagittis congue augue massa varius
     sodales sapien undo tempus dolor egestas magna suscipit magna
     tempus aliquet porta sodales augue suscipit luctus neque "
   </p>
   <div className="item_rating mb-2">
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
   </div>
   <h5>BY AMELIE NEWLOVE</h5>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <div className="user_img d-flex justify-content-center">
     <img src={user1} className="img-fluid" alt="user-1" />
   </div>
     <Carousel.Caption>
     <p>
     " Etiam sapien sem at sagittis congue augue massa varius
     sodales sapien undo tempus dolor egestas magna suscipit magna
     tempus aliquet porta sodales augue suscipit luctus neque "
   </p>
   <div className="item_rating mb-2">
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
   </div>
   <h5>BY AMELIE NEWLOVE</h5>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <div className="user_img d-flex justify-content-center">
     <img src={user4} className="img-fluid" alt="user-4" />
   </div>
     <Carousel.Caption>
     <p>
     " Etiam sapien sem at sagittis congue augue massa varius
     sodales sapien undo tempus dolor egestas magna suscipit magna
     tempus aliquet porta sodales augue suscipit luctus neque "
   </p>
   <div className="item_rating mb-2">
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
     <i className="bi bi-star-fill"></i>
   </div>
   <h5>BY AMELIE NEWLOVE</h5>
     </Carousel.Caption>
   </Carousel.Item>

 </Carousel>   
   
   
   </Row>
  
  </Container>
   
   
   </section>
    
    
    
    </div>
  )
}

export default Section6