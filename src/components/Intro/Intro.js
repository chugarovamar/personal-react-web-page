import React from 'react'

import {Container,Row,Col} from 'react-bootstrap'
import './Intro.css'


function Intro (){
    return(
<Container fluid className='Intro-header' style={{ backgroundImage: "url(/4.jpg)"}}>
    <Row className='py-4 px-5'>
        <Col className='py-5 px-4' >
            <div className=' py-3'>
                <h1 className='Intro-header__headline'>
                    Фотограф<br></br> Марина Чугарова
                </h1>


            </div>
        </Col>

    </Row>
</Container>

 

    )
}

export default Intro