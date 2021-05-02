import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Navbar,Col,Row,Container, Nav, NavItem, NavLink} from 'react-bootstrap';



function Header(){
    return(
<Container fluid  className ='header '>
    <Row >    
    <Col className='mx-0 my-2 '>
    <Navbar  collapseOnSelect expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fill variant='tabs' className=' justify-content-around w-100 my-2'  >
        
        <NavItem  >
          <NavLink className='header__nav-link  pb-2'  eventKey='/service'>Услуги</NavLink>
        </NavItem>  
         <NavItem  >
            <NavLink className='header__nav-link   pb-2'  eventKey='/gallery'>Галерея</NavLink>
        </NavItem>
      
        <NavItem >
            <NavLink className='header__nav-link  pb-2'  href='/price'>Стоимость</NavLink>
        </NavItem>
        <NavItem   >
            <NavLink className='header__nav-link   pb-2'  eventKey='/contacts'>Контакты</NavLink>
        </NavItem>
        
    </Nav>
    </Navbar.Collapse>
    </Navbar>
   </Col>
   </Row>
</Container>

    )
    
}
export default Header