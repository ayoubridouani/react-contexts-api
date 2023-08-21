import React, { Component } from 'react'

export default class LevelTwo extends Component {

  showAlertFromLevelTwo(){
    alert('alert from level two')
  }

  increaseCounter = () => {
    let number = parseInt(prompt('insert a number', parseInt(Math.random()*10)))
    this.props.increaseCounter(number)
  }

  decreaseCounter = () => {
    let number = parseInt(prompt('insert a number', parseInt(Math.random()*10)))
    this.props.decreaseCounter(number)
  }

  render() {
    return (
      <div>
        <h2>Hi from level 2.</h2>
        <p>Theme: {this.props.theme}</p>
        <p>UID: {this.props.uid}</p>
        <button onClick={this.props.showAlertFromLevelOne}>click (level one)</button>
        <button onClick={this.showAlertFromLevelTwo}>click (level two)</button>

        <center>
          <p>{this.props.counter}</p>
          <button onClick={this.increaseCounter}>Increase</button>
          <button onClick={this.decreaseCounter}>Decrease</button>
        </center>
      </div>
    )
  }
}