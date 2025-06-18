import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Shoeshow from './components/Shoeshow';
import Shop from './components/Shop';
import Why from './components/Why';
import Category from './components/Category';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <Shoeshow/>
              <Category/>
              <Why/>
              
              <Footer/>
            </>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brand" element={<div className="pt-20 text-center">Brand Page</div>} />
          <Route path="/men" element={<div className="pt-20 text-center">Men Page</div>} />
          <Route path="/women" element={<div className="pt-20 text-center">Women Page</div>} />
          <Route path="/contact" element={<div className="pt-20 text-center">Contact Page</div>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
