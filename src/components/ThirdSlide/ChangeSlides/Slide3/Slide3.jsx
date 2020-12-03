import React from 'react'
import classes from './Slide3.module.css'
import classNames from 'classnames';

const Slide3 = props => {
    return (
        <div className={classes.thirdSlide}>
            <div className={classes.thirdSlideTitle}>Звенья патогинеза СД2</div>
            <div className={classes.thirdSlideBox}></div>
            <div className={classNames(classes.ice, classes.ice_1)}></div>
            <div className={classNames(classes.ice, classes.ice_2)}></div>
            <div className={classNames(classes.ice, classes.ice_3)}></div>
        </div>
    )
}

export default Slide3