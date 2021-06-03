import React from 'react'

import {Container,Row,Col} from 'react-bootstrap'
import './Intro.css'


function Intro (){
    return(
<Container fluid className='Intro-header my-3' style={{ backgroundImage: "url(/4.png)"}}>
   <Row className='m-4 px-0 py-4' >
       <Col className='my-3 p-0'>
       <h1 className='Intro-header__headline m-0 py-2'>
        Фотограф<br></br> Марина Чугарова
        </h1>
       </Col>

   </Row>
</Container>

 

    )
}

export default Intro
/*<Col className='py-5 px-0' >
            <div className=' py-3'>
      <Row className='py-4 px-0'>
       

    </Row>           <h1 className='Intro-header__headline py-2'>
                    Фотограф<br></br> Марина Чугарова
                </h1>


            </div>
        </Col>*/