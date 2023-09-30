import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services({BOOKING_PAGE,  navigateTo}) {
  return (
    <div  id='servicemain' >
      <div id='sImagediv'>
        <img src="/asset/dinning.jpeg" alt="about us" id='sImage'/>
      </div>
      
<div >
<h1 id='serviceh1'>Our Services</h1>
{/* <div id='services'>
      <h1>Our Services</h1>
      </div> */}
      <div className='card-grid'>
      <Card id='card' >
      <Card.Img  src="/asset/catering.webp"id='Img' />
      <Card.Body style={{textAlign: "left", padding: "10px",}}>
        <Card.Title>Outdoor Catering Services</Card.Title>
        <p id='cardtext'>lanning a special event? Let us take care of the food! 
          Our catering services are perfect for weddings, birthdays, 
          and other celebrations.
        </p>
        <Button style={{ padding: "10px 30px", backgroundColor: "rgb(235, 11, 11)", border: "1px solid rgb(235, 11, 11)"}} onClick={() => navigateTo(BOOKING_PAGE)}>Book</Button>
      </Card.Body>
    </Card> 
    <Card id='card'>
  <Card.Img  src="/asset/private.webp" id='Img'/>
  <Card.Body style={{textAlign: "left"}}>
    <Card.Title>Private Dinnig</Card.Title>
    <p id='cardtext'>
      Want to host your event at our restaurant? 
      We offer private event spaces that are perfect for parties, 
      meetings, and other gatherings.
    </p>
    <Button style={{ padding: "10px 30px", backgroundColor: "rgb(235, 11, 11)", border: "1px solid rgb(235, 11, 11)"}} onClick={() => navigateTo(BOOKING_PAGE)}>Book</Button>
  </Card.Body>
</Card>
      <Card id='card'>
      <Card.Img  src="/asset/reserved.jpeg" id='Img'/>
      <Card.Body style={{textAlign: "left"}}>
        <Card.Title>Table Reservations</Card.Title>
        <p id='cardtext'>
        Make your dining experience hassle-free by reserving your table in advance.
        This ensures a stress-free dining experience.
        </p>
        <Button style={{ padding: "10px 30px", backgroundColor: "rgb(235, 11, 11)", border: "1px solid rgb(235, 11, 11)"}} onClick={() => navigateTo(BOOKING_PAGE)}>Book</Button>
      </Card.Body>
    </Card> 
      <Card id='card'>
      <Card.Img  src="/asset/hall.jpeg" id='Img'/>
      <Card.Body style={{textAlign: "left"}}>
        <Card.Title>Hall Renting</Card.Title>
        <p id='cardtext'>Our hall renting service is the perfect solution for individuals and organizations in need of a spacious and professional location for meetings, conferences, and other special events. 
        </p>
        <Button style={{ padding: "10px 30px", backgroundColor: "rgb(235, 11, 11)", border: "1px solid rgb(235, 11, 11)"}} onClick={() => navigateTo(BOOKING_PAGE)}>Book</Button>
      </Card.Body>
    </Card> 
      
     
      
    
      </div>
    </div>   
   
    </div>
  )
}

export default Services;



