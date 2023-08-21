import React, { Component } from 'react'
import LevelTwoUsingContext from './LevelTwoUsingContext'
import { Context } from '../Contexts/ContextProvider'

export default class LevelOneUsingContext extends Component {
    showAlertFromLevelOne(){
        alert('alert from level one')
    }

    render() {
        return (
            <div>
                <h1>Hi from level 1.</h1>
                <LevelTwoUsingContext showAlertFromLevelOne={this.showAlertFromLevelOne}></LevelTwoUsingContext>
                <Context.Consumer>
                    {(value) => {
                        return (
                            <>
                                <button onClick={value.click1}> Click 1 x(0) </button>
                                <button onClick={value.click2}> Click 2 x(-1) </button>
                            </>
                        )
                    }}
                </Context.Consumer>
            </div>
        )
    }
}