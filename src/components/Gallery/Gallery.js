import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Container, Row,Col,Image } from 'react-bootstrap';
import './Gallery.css'




function Gallery(){
  return(
    <Container fluid className='Gallery'>
      <Row className='Gallery__name-section' >
        <Col className='d-flex flex-column justify-content-center'>
        <h1 className='p-3 mb-1 Gallery__headline'> Портфолио</h1>
        <span className='Gallery__text px-5 mx-5 mb-4'>
          Каждая фотография - это маленькая живая история со своими эмоциями и воспоминаниями.
        </span>
        </Col>
      </Row>
      <Row  className='Gallery__imgs pb-5 py-0'>
      <Col  className='flex-row'>
 <SimpleReactLightbox>
  <SRLWrapper > 
  <a href="fulls/1.jpg" >
    <Image src="fulls/1.jpg" className='p-3 img-600' alt="Umbrella" width={600} />
  </a>
  <a href="fulls/2.jpg" >
    <Image src="fulls/2.jpg" className='p-3 img-600 ' alt="Blue sky" width={600} />
  </a>
<a href="fulls/9.jpg" >
<Image src="fulls/9.jpg" className='p-3 img-600 ' width={600} alt="Blue sky" />
</a>
<a href="fulls/10.jpg" >
<Image src="fulls/10.jpg" alt="Blue sky" width={600} className='p-3 img-600 ' />
</a>
<a href="fulls/11.jpg" >
<Image src="fulls/11.jpg" alt="Blue sky" width={600} className='p-3 img-600 '/>
</a>
<a href="fulls/12.jpg"
>
<Image src="fulls/12.jpg" className='p-3 img-600' width={600}  alt="Umbrella" />
</a>
<a href="fulls/17.jpg"
>
<Image src="fulls/17.jpg" className='p-3 img-1200 ' width={1200} alt="Blue sky" />
</a>
<a href="fulls/18.jpg"
>
<Image src="fulls/18.jpg" className='p-3 img-600 ' width={600} alt="Blue sky" />
</a>
<a href="fulls/19.jpg"
>
<Image src="fulls/19.jpg" className='p-3 img-600' width={600} alt="Blue sky" />
</a>
 <a href="fulls/14.jpg"
 >
   <Image src="fulls/14.jpg" className='p-3  img-600' width={600} alt="Blue sky" />
  </a>
  <a href="fulls/15.jpg"
  >
   <Image src="fulls/15.jpg" className='p-3 img-600' width={600} alt="Umbrella" />
   </a>
  <a href="fulls/16.jpg"
  >
    <Image src="fulls/16.jpg" className='p-3 img-600'width={600} alt="Blue sky" />
   </a>
  <a href="fulls/13.jpg"
  >
    <Image src="fulls/13.jpg" className='p-3 img-600'width={600} alt="Umbrella" />
  </a> 
  <a href="fulls/22.jpg"
  >
    <Image src="fulls/22.jpg" className='p-3 img-600 ' width={600}  alt="Blue sky" />
  </a>
  <a href="fulls/23.jpg"
  >
   <Image src="fulls/23.jpg" className='p-3 img-600 '  width={600}  alt="Blue sky" />
  </a>
  <a href="fulls/24.jpg"
  >
   <Image src="fulls/24.jpg" className='p-3 img-600 '  width={600}  alt="Blue sky" />
  </a>
  <a href="fulls/25.jpg"
  >
    <Image src="fulls/25.jpg" className='p-3 img-600'  width={600}  alt="Blue sky" />
  </a>
  <a href="fulls/4.jpg"
  >
  <Image src="fulls/4.jpg" className='p-3 img-600 last-img' width={600} alt="Blue sky" />
   </a>
  <a href="fulls/6.jpg"
  >
   <Image src="fulls/6.jpg" className='p-3 img-600 last-img' width={600} alt="Blue sky" />
  </a>
    </SRLWrapper>
    </SimpleReactLightbox>
    </Col>
    </Row>
    </Container>
  )
}
export default Gallery
