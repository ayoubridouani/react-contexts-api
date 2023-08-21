import React, { Component } from 'react'
import { Context } from '../Contexts/ContextProvider'

export default class LevelTwoUsingContext extends Component {
    showAlertFromLevelTwo(){
        alert('alert from level two')
    }

    increaseCounter = (value) => {
        let number = parseInt(prompt('insert a number', parseInt(Math.random()*10)))
        value.increaseCounter(number)
    }

    decreaseCounter = (value) => {
        let number = parseInt(prompt('insert a number', parseInt(Math.random()*10)))
        value.decreaseCounter(number)
    }
  
    render() {
        return (
            <div>
                <h2>Hi from level 2.</h2>
                <Context.Consumer>
                    {(value) => {
                        return (
                            <>
                                <p>Theme: {value.state.theme}</p>
                                <p>UID: {value.state.uid}</p>
                                <button onClick={this.props.showAlertFromLevelOne}>click (level one)</button>
                                <button onClick={this.showAlertFromLevelTwo}>click (level two)</button>

                                <center>
                                    <p>{value.state.counter}</p>
                                    <button onClick={this.increaseCounter.bind(this, value)}>Increase</button>
                                    <button onClick={this.decreaseCounter.bind(this, value)}>Decrease</button>
                                </center>
                            </>
                        )
                    }}
                </Context.Consumer>
            </div>
        )
    }
}