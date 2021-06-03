import Service from './Service/Service';
import Intro from './Intro/Intro';
import Gallery from './Gallery/Gallery';
import Price from './Price/Price';
const routes = [
    { path: '/', name:'Главная', Component: Intro },
    { path: '/service', name:'Услуги', Component: Service },
    { path: '/gallery', name:'Галерея', Component: Gallery},
    { path: '/price', name:'Стоимость', Component: Price},
  ]
 export default routes