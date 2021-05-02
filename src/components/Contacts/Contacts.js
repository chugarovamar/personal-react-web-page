import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row,Container,Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk ,faInstagram, faTelegram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import './Contacts.css'



function Contacts (){
return (
<div className='footer' style={{ backgroundImage: "url(/3.jpg)" }} >
<Container >
  <Row className='footer-contacts py-5 mt-5 '>
    <Col lg={6} md={12} sm={12}  className='footer-contacts__image-section d-flex   '>
    <Image src='IMG_2830.jpg' className='w-25 ' roundedCircle/>
    </Col>
    <Col lg={6} md={12} sm={12}  className='footer-contacts__mail-section d-flex flex-column pl-4  '>
    <h2 className='mb-3 footer-contacts__headline'>Marina Chugarova</h2>
    <a href='mailto:chugarovamar@gmail.com?body=Здравствуйте!Интересует у вас фотосъемка&subject=ВАЖНОЕ ПИСЬМО'  className='footer-contacts__icon-name'>
    <FontAwesomeIcon  className = 'footer-contacts__icon  mr-2' icon={faEnvelope} size='2x'/>
     chugarovamar@gmail.com
    </a>
    </Col>
  </Row>
  <Row className='footer-links py-5 mb-3 '>
    <Col className=' d-flex justify-content-around'>
      <a href="https://vk.com/marinavch" target='_blank' rel="noreferrer" >
        <FontAwesomeIcon  className='footer-links__icon' icon={faVk} size='1x'/>
      </a>
    
   
      <a href="https://www.instagram.com/march_ph/" target='_blank' rel="noreferrer" >
    <FontAwesomeIcon className='footer-links__icon'  icon={faInstagram} size='1x'/>
    </a>
    
    
      <a href="https://www.facebook.com/profile.php?id=100011995968284" target='_blank' rel="noreferrer" >
    <FontAwesomeIcon className='footer-links__icon'  icon={faFacebook} size='1x'/>
    </a>
    
  
      <a href="https://t.me/marinavch" >
    <FontAwesomeIcon className='footer-links__icon'  icon={faTelegram } size='1x' />
    </a>
    </Col>
  </Row>

</Container></div>
)
}
export default Contacts

