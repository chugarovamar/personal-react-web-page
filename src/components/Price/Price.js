import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row,Carousel,CarouselItem,} from 'react-bootstrap'
import './Price.css'


function Price(){
   return(
   <Container fluid className='py-4'>
     <Row className='my-5'>
      <Col >
        <Carousel className ='Price-carousel background py-5' style={{ backgroundImage: "url(/opg.jpg)" }}>
          <CarouselItem interval={3000} className= 'py-3 Price-carousel__section '>
          <h3 className='Price-carousel__headline'>Индивидуальная съемка</h3>
        <p className='pt-2 px-5 Price-carousel__text' >
         - 3 тыс. рублей
        </p>
        <p className='px-5 Price-carousel__text' >
         - 10 фотографий в обработке 
        </p>
        <p className='px-5 Price-carousel__text' >
         - Готовые фотографии в течение 10 дней 
        </p>
        <p className='px-5 Price-carousel__text' >
         - Время фотосессии: 1 час
        </p>  
          </CarouselItem>
          <CarouselItem interval={3000} className='py-3 Price-carousel__section '>
          <h3  className='Price-carousel__headline' >Парная фотосессия/Love story</h3>
        <p className='pt-2 px-5 Price-carousel__text' >
          - 5 тыс. рублей
        </p>
        <p className=' px-5 Price-carousel__text' >
          - 15-20 фотографий в обработке
        </p>
        <p className='px-5 Price-carousel__text' >
         - Готовые фотографии в течение 10 дней 
        </p>
        <p className='px-5 Price-carousel__text' >
         - Время фотосессии: до 2 часов
        </p>
          </CarouselItem>
          <CarouselItem interval={3000} className='py-3 Price-carousel__section '>
          <h3  className='Price-carousel__headline'>Семейная фотосессия</h3>
        <p className='pt-2 px-5 Price-carousel__text' >
        - 5 тыс. рублей
        </p>
        <p className=' px-5 Price-carousel__text' >
          - 15 фотографий в обработке
        </p>
        <p className='px-5 Price-carousel__text' >
         - Готовые фотографии в течение 10 дней 
        </p>
        <p className='px-5 Price-carousel__text' >
         - Время фотосессии: до 2 часов
        </p>
          </CarouselItem>
        </Carousel>
      </Col>
    </Row>
   </Container> 
   )
}
export default Price
