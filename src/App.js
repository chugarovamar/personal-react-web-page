
import './App.css';
import Header from './components/Header/Header'
import Contacts from "./components/Contacts/Contacts";
import Service from './components/Service/Sevrice';
import Intro from './components/Intro/Intro';
import Gallery from './components/Gallery/Gallery';
import Price from './components/Price/Price';
function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Service/>
      <Gallery/>
      <Price/>
      <Contacts/>
    </div>
  );
}

export default App;
