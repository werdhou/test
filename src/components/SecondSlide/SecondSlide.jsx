import React from 'react'
import classes from './SecondSlide.module.css'
import classNames from 'classnames';


const SecondSlide = props => {
    return <div className={classes.secondSection}>
        <div className={classes.secondSection_title}>
            Основа терапии - <br/>
            патогенез СД2
        </div>
        <div>
        <div className={classNames(classes.ice, classes.ice_1)}></div>
        <div className={classNames(classes.ice, classes.ice_2)}></div>
        <div className={classNames(classes.ice, classes.ice_3)}></div>
        <div className={classNames(classes.ice, classes.ice_4)}></div>
        </div>
    </div>
}

export default SecondSlide