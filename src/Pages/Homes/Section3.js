import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Cards from '../../Component/Cards';
import Image1 from "../../assets/black_forest_cake.jpg";
import Image2 from "../../assets/egless_cake.jpg";
import Image3 from "../../assets/Pineapple-Pastry.jpg";
import Image4 from "../../assets/chocolate_cup_cake.jpg";
import Image5 from "../../assets/puffs.jpg";
import Image6 from "../../assets/milk_chocolate.jpg";
import Image7 from "../../assets/chocolate_chip_cookies.jpg";
import Image8 from "../../assets/peanut_butter_cookies.jpg";
import { Link } from 'react-router-dom';
import Sectionchefs from './Sectionchefs';


// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Black Forest Cake",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Eggless Fruit Cake",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Pinneapple Pastry",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Chocolate Cup Cake",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Veg Puffs",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Milk Chocolate",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Chocolate Chip Cookie",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Peanut Butter Cookie",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

function Section3() {
  const renderRatingIcons=(rating)=>{
    const icons = [];
    for (let i = 1; i <= 5; i++) {
      if(rating>0.5){
        icons.push(<i key={i} class="bi bi-star-fill"></i>);
      }else if(rating>0){
        icons.push(<i key={"half"}class="bi bi-star-half"></i>);
      }else{
        icons.push(<i key={`empty${i}`}class="bi bi-star"></i>);
      }
      rating--;
    }
    return icons
  }
  return (
    <div>
    <section className='menu_section'>
      <Container>
        <Row>
         <Col lg={{span: 8, offset: 2}} className="text-center mb-5">  
         <h2>OUR UNIQUE BREAD CREATIONS</h2> 
      <div className='section-title position-relative  mx-auto mb-5 pb-3'style={{maxWidth: '600px'}}>
           
      </div>
         
         
         <p classname="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quis
          elit maximus ullamcorper. Ut euismod, lectus nec suscipit porta, 
         </p>
        </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
           <Cards 
           key={index}
           image={cardData.image}
           rating={cardData.rating}
           title={cardData.title}
           paragraph={cardData.paragraph}
           price={cardData.price}
           renderRatingIcons={renderRatingIcons}
           
           />
           ))}
        </Row>
        <Row className="pt-5">
        <Col sm={{ span: 7, offset: 1 }} lg={8}>
          <div className="ads_box ads_img1 mb-5 mb-md-0">
            <h4 className="mb-0">40% Off</h4>
            <h5>Bread</h5>        
          <p >Try our new tasty bread. </p>  
          <p>Limited time offer</p>     
   
            <Link to="/" className="btn explore_btn px-4 rounded-0">
            Learn More
          </Link>
           
          </div>

        </Col>

      </Row>
      <Sectionchefs />
      
      </Container>
    
    </section>
    
    </div>
  )
}

export default Section3