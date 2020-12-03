import React, { useState } from 'react'
import Slide1 from './ChangeSlides/Slide1/Slide1';
import Slide2 from './ChangeSlides/Slide2/Slide2.jsx';
import Slide3 from './ChangeSlides/Slide3/Slide3';
import classes from './ThirdSlide.module.css'

const ThirdSlide = props => {

    // const slides = [<Slide1 key={1}/>, <Slide2 key={2}/>, <Slide3 key={3}/>];
	// const [sliderValue, setSliderValue] = useState(0);

	// function handleChange(e) {
	// 	setSliderValue(e.target.value);
	// 	if (e.target.value <= 25) {
	// 		document.querySelector('.Slides').style.transform = 'translateX(0vw)';
	// 	} else if (e.target.value > 25 && e.target.value < 75) {
	// 		document.querySelector('.Slides').style.transform = 'translateX(-100vw)';
	// 	} else {
	// 		document.querySelector('.Slides').style.transform = 'translateX(-200vw)';
	// 	}
	// }

	// function truncSlider() {
	// 	if (sliderValue <= 25) {
	// 		setSliderValue(0);
	// 	} else if (sliderValue > 25 && sliderValue < 75) {
	// 		setSliderValue(50);
	// 	} else {
	// 		setSliderValue(100);
	// 	}
	// }

    return (
    <div className={classes.thirdSlide}>
        
    </div>
    )
}

export default ThirdSlide