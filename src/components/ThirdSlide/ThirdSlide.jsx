import React, { useState } from 'react'
import Slide1 from './ChangeSlides/Slide1/Slide1';
import Slide2 from './ChangeSlides/Slide2/Slide2.jsx';
import Slide3 from './ChangeSlides/Slide3/Slide3';
import classes from './ThirdSlide.module.css'
import './slidesStyle.css'


const ThirdSlide = props => {

	const slides = [<Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />];
	const [sliderValue, setSliderValue] = useState(0);

	function handleChange(e) {
		setSliderValue(e.target.value);
		if (e.target.value <= 25) {
			document.querySelector('.slides').style.transform = 'translateX(0vw)';
		} else if (e.target.value > 25 && e.target.value < 75) {
			document.querySelector('.slides').style.transform = 'translateX(-100vw)';
		} else {
			document.querySelector('.slides').style.transform = 'translateX(-200vw)';
		}
	}

	function truncSlider() {
		if (sliderValue <= 25) {
			setSliderValue(0);
		} else if (sliderValue > 25 && sliderValue < 75) {
			setSliderValue(50);
		} else {
			setSliderValue(100);
		}
	}


	return (
		<div className={classes.thirdSlide}>
			<div className={classes.navbar}>
				<div className={classes.navbar1}></div>
				<div className={classes.navbar2}></div>
				<div className={classes.navbar3}></div>
			</div>
			<div className={classes.content}>
				<div className='slides'>
					{slides}
				</div>
			</div>
			<div className={classes.input_range}>
				<input
					className={classes.input_range__slider}
					type="range"
					min="0" max="100"
					step="0.1"
					value={sliderValue}
					onChange={handleChange}
					onTouchEnd={truncSlider} />
				<div className={classes.input_range__slider_years}>
					<span className={classes.input_range__slider_year}>1988</span>
					<span className={classes.input_range__slider_year}>2009</span>
					<span className={classes.input_range__slider_year}>2016</span>
				</div>
			</div>
		</div>
	)
}

export default ThirdSlide

	// 	return (
	// 		<>
	// 			<div className="Page ThirdPage">
	// 				<Arrow position='top' dataAlt={'1'}/>
	// 				<div className="ThirdPage-Content">
	// 					<div className="Slides">
	// 						{slides}
	// 					</div>
	// 				</div>
	// 				<div className="Slider">
	// 					<input
	// 						className="Slider-Input"
	// 						type="range"
	// 						min="0" max="100"
	// 						step="0.1"
	// 						value={sliderValue}
	// 						onChange={handleChange}
	// 						onTouchEnd={truncSlider}/>
	// 					<div className="Slider-Years">
	// 						<div className="Slider-Year">1988</div>
	// 						<div className="Slider-Year">2009</div>
	// 						<div className="Slider-Year">2016</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</>
	// 	);
	// };