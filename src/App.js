
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Restaurantinfo from './components/Restaurantinfo';

function App() {
  return (
    <Router>
       <Header/>
       <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info/:id' element={<Restaurantinfo/>} />
      </Routes>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;
