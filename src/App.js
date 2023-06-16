import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Mission from './Components/Mission';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <Header />
        <Navbar />
      </div>

      <div className='row'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mission' element={<Mission/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
