import React from 'react'
import classes from "./BurgerIngredent.css"
const burgerIngredent = (props) => {

    let ingredent = null

    switch(props.type) {
        case ('bread-bottom'):
            ingredent = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredent = (
                <div>
                    <div className={classes.BreadTop}></div>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ('meat'):
            ingredent = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingredent = <div className={classes.Cheese}></div>
            break;
        case ('bacon'):
            ingredent = <div className={classes.Bacon}></div>
            break;
        case ('salad'):
            ingredent = <div className={classes.Salad}></div>
            break;
        default:
            ingredent = null
    }
    
    return ingredent
}

export default burgerIngredent