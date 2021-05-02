import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Service.css'


function Service (){
    return(
        <Container fluid>
            <Row className='py-4 my-3 px-4 service-section'>
                <Col xs={12} sm={4} className='py-5 px-4 service-section__article-hover '>
                <Image className='service-section__img' src='./icon2.jpg' roundedCircle></Image>
                 <h5 className='pt-5 pb-4 service-section__headline-hover'>ПОДГОТОВКА К ФОТОСЕТУ</h5>
                 <span className='service-section__text px-2'>Создание и обсуждение концепции фотосессии, 
                     помощь в подборе образа для съемки. 
                     Рекомендации в выборе места для проведения фотосессии,
                     обсуждение подходящих вариантов
                      </span>
                </Col>
                <Col xs={12} sm={4} className='py-5 px-4  service-section__article  '>
                <Image className='service-section__img' src='./icon1.jpg' roundedCircle></Image>
                <h5 className='pt-5 pb-4 service-section__headline'>ПРОВЕДЕНИЕ СЪЕМКИ </h5>
                <span  className='service-section__text px-2'>Перед съемкой обсуждаем ваши пожелания.
                    Помогаю вам в позировании. 
                    После съемки у вас есть возможность выбрать лучшие фотографии для обработки.
                </span>
                </Col>
                <Col xs={12} sm={4} className='py-5 px-4  service-section__article-hover'>
                <Image className='service-section__img' src='./icon3.jpg' roundedCircle></Image>
                <h5 className='pt-5 pb-4 service-section__headline-hover'>ОБРАБОТКА ФОТОГРАФИЙ</h5>
                <span className='service-section__text  px-2' >
                    Обрабатываю фотографии с учетом ваших пожеланий.
                    Обработанные фотографии могут отсылаться по мере готовности, 
                    либо все вместе. Исходники предоставляю по вашему желанию.
                </span>
                </Col>
            </Row>
        </Container>

    )

}
export default Service