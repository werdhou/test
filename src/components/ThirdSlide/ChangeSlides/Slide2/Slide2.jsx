import React from 'react'
import classes from './Slide2.module.css'
import classNames from 'classnames';

const Slide2 = props => {
    return (
        <div className={classes.secondSlide}>
            <div className={classes.secondSlideTitle}>Смертельный октет</div>
            <div className={classes.secondSlideBox}></div>
            <div className={classNames(classes.ice, classes.ice_1)}></div>
            <div className={classNames(classes.ice, classes.ice_2)}></div>
            <div className={classNames(classes.ice, classes.ice_3)}></div>        </div>
    )
}

export default Slide2