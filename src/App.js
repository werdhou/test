import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import './App.css';
import FirstSlide from './components/FirstSlide/FirstSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';

function App() {
  return (
    <React.Fragment>
      <Swiper id='main' direction={'vertical'}>
        <SwiperSlide><FirstSlide /></SwiperSlide>
        <SwiperSlide><SecondSlide /></SwiperSlide>
        <SwiperSlide><ThirdSlide /></SwiperSlide>
      </Swiper>
    </React.Fragment>
  )
}

export default App;