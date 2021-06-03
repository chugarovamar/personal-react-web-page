
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Contacts from "./components/Contacts/Contacts";
import { CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import routes from './components/routes'
import Favicon from 'react-favicon'



function App() {

  return (
    <div className="App"> 
   <Favicon url='favicon.ico' />
    <Router> 
      <Header/>
      {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={400}
                  classNames="page"
                  unmountOnExit
                >
                    <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
      <Contacts/>
      
     </Router> 
     
    </div>
  );
}

export default App;
