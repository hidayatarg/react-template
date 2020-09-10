import React, { Component } from 'react'
import Aux from '../hoc/Auxiliary'
import Burger from '../Burger/Burger'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>BurgerControl</div>
            </Aux>
        )
    }
}
