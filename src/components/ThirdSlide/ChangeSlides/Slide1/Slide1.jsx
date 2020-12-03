import React from 'react'
import classes from "./Slide.module.css";
import classNames from 'classnames';


const Slide1 = props => {
    return (
        <div className={classes.firstSlide}>
            <div className={classes.firstSlideTitle}>
                Звенья патогенеза СД2
            </div>
            <div className={classes.firstSlideBox}></div>
            <div className={classNames(classes.ice, classes.ice_1)}></div>
            <div className={classNames(classes.ice, classes.ice_2)}></div>
            <div className={classNames(classes.ice, classes.ice_3)}></div>
        </div>
    )
}

export default Slide1