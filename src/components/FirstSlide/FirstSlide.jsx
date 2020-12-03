import React from 'react'
import classes from './FirstSlide.module.css'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';


const FirstSlide = props => {
    return (
        <div className={classes.main}>
            <div className={classes.navbar}>
                <div className={classes.navbar1}></div>
                <div className={classes.navbar2}></div>
                <div className={classes.navbar3}></div>
            </div>
            <div className={classes.header}>
                <div className={classes.header_text}></div>
            </div>
            <div className={classes.container}>
                <div className={classNames(classes.circle, classes.pulse_circle_1)} ></div>
                <div className={classNames(classes.circle, classes.pulse_circle_2)}></div>
                <div className={classNames(classes.circle, classes.pulse_circle_3)}></div>
                <div className={classNames(classes.circle, classes.pulse_circle_4)}></div>

                <div className={classes.pagination}></div>
            </div>
            <div className={classes.footer}>
                <NavLink to='/secondSlide'>
                    <div className={classes.footer__1}>
                        <span>Листайте вниз</span>
                        <span className={classes.arrow_down}></span>
                    </div>
                </NavLink>
                <div className={classes.footer__2}></div>

            </div>
        </div>
    )
}

export default FirstSlide

// className={classes.main}