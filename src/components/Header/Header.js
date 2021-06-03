import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Navbar,Col,Row,Container, Nav,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import routes from '../routes'


function Header(){

    return(
<Container fluid  className ='header '>
    <Row >    
    <Col className='mx-0 my-2 '>
    <Navbar fixed= 'top' collapseOnSelect expand="lg" fill='true' className='header-bar pt-1' >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav variant='tabs' className="justify-content-around w-100 mt-1">
    {routes.map(route=>(
    <NavLink 
    className='header__nav-link  pt-2 pb-2'
         href={route.path}
        key={route.path}
        to={route.path}
         exact ="true"
         as={Link}>
            {route.name}
        
      </NavLink>
    ))}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
   </Col>
   </Row>
</Container>

    )
    
}
export default Header


 