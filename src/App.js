import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FirstSlide from './components/FirstSlide/FirstSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';

function App() {
  return (
    <BrowserRouter>
    <div className='main-content'> 
    <FirstSlide />
    </div>
      
    <div>
    <Route path='/secondSlide' render={() => <SecondSlide />} />
    <Route path='/thirdSlideSlide' render={() =>   <ThirdSlide />} />
    </div>
    </BrowserRouter>
  )
}

export default App;