import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './page/header/Header';
import Footer from './page/footer/Footer';
import Cars from './page/cars/Cars';
import Menu from './components/menu/Menu';
import MainPage from './page/mainpage/MainPage';


function App() {
  return (
    <>
    <Menu/>
       <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/cars" element={<Cars/>}/>
    </Routes>
    
   
     
    </>
  );
}

export default App;
