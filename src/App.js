import React from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Categories from './components/categories/Categories';



function App() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Categories/>
      <Carousel/>
     <Body/>
      <Footer/>
    </div>
  )
}

export default App;
