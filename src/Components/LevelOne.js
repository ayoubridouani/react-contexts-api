import React, { Component } from 'react'
import LevelTwo from './LevelTwo'

export default class LevelOne extends Component {

  state = {
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

  // error: https://sebhastian.com/this-setstate-is-not-a-function/
  // click1(){
  //   this.setState({
  //     counter: this.state.counter * 0
  //   })
  // }

  click1 = () => {
    this.setState({
      counter: this.state.counter * 0
    })
  }

  click2(){
    this.setState({
      counter: this.state.counter * -1
    })
  }

  showAlertFromLevelOne(){
    alert('alert from level one')
  }

  render() {
    return (
      <div>
        <h1>Hi from level 1.</h1>
        <>{"------->"} {this.props.children}</>
        <LevelTwo theme={this.props.theme} uid={this.props.uid} showAlertFromLevelOne={this.showAlertFromLevelOne}
                  counter={this.state.counter} increaseCounter={this.increaseCounter} decreaseCounter={this.decreaseCounter}></LevelTwo>

        <button onClick={this.click1}> Click 1 x(0) </button>
        <button onClick={this.click2.bind(this)}> Click 2 x(-1) </button>
      </div>
    )
  }
}