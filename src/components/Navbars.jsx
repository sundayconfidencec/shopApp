import {React} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import {CartIcon} from '../components/Icons';


function Navbars({getCartTotal, PAGE_CART, navigateTo, PAGE_PRODUCTS, KIDS_PAGE, CONTACT_PAGE, WOMEN_PAGE, MEN_PAGE, UNISEX_PAGE, TRENDS_PAGE }) {
  return (
    <>
    <Navbar  expand="lg" fixed='top'  className='navbar-custom'>
      <Container fluid>
        <Navbar.Brand><Nav.Link onClick={() => navigateTo(PAGE_PRODUCTS)} style={{fontSize: "25px", fontWeight: "bold"}}>ELDEEWEARS</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
           
          
            <Nav.Link onClick={() => navigateTo(TRENDS_PAGE)}>TRENDS</Nav.Link>
            <Nav.Link onClick={() => navigateTo(WOMEN_PAGE)}>WOMEN</Nav.Link>
            <Nav.Link onClick={() => navigateTo(MEN_PAGE)}>MEN</Nav.Link>
            <Nav.Link onClick={() => navigateTo(KIDS_PAGE)}>KIDS</Nav.Link>
            <Nav.Link onClick={() => navigateTo(UNISEX_PAGE)}>UNISEX</Nav.Link>
             <Nav.Link onClick={() => navigateTo(CONTACT_PAGE)}> CONTACT US</Nav.Link>
            <Nav.Link onClick={() => navigateTo(PAGE_CART)}> <div style={{display: "flex"}}>
            <CartIcon/> <div>
                {getCartTotal()}
            </div>
                </div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Navbars;