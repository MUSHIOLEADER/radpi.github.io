import Home from './component/Home';
import Wwd from './component/Wwd';
import Navbar from './component/Navbar';
import Page1 from './component/Page1';
import Home1 from './component/Home1'
import Cqf from './component/Cqf';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Footer from './component/Footer';
import Footer1 from './component/Footer1';
import './App.css';

function App() {
  return (
    <Router>
    
    <div className="app">
       <Navbar/>
      <Switch>
        <Route exact path={'/'}>          
        <Home/>
        <Home1/>
        <Wwd/>
        <Cqf/>
        </Route>
        <Route path={'/page1'}>
          <Page1/>
        </Route>
      </Switch>    
      <Footer1/>
      <Footer/>
    </div>
    </Router>

  
  );
}

export default App;
