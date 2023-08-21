import React, { Component } from 'react'

export const Context = React.createContext()

export default class ContextProvider extends Component {

    state = {
        theme: 'dark',
        uid: '100001',
        counter: 0
    }

    increaseCounter = (number) => {
        this.setState({
            counter: this.state.counter + number
        })
    }

    decreaseCounter = (number) => {
        this.setState({
            counter: this.state.counter - number
        })
    }

    click1 = () => {
        this.setState({
            counter: this.state.counter * 0
        })
    }

    click2 = () => {
        this.setState({
            counter: this.state.counter * -1
        })
    }

    render() {
        return (
            <Context.Provider value={{state: this.state, increaseCounter: this.increaseCounter, decreaseCounter: this.decreaseCounter,
                                        click1: this.click1, click2: this.click2 }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const ContextConsumer = Context.Consumer