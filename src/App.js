import { Component } from 'react'
import ContextProvider, { Context } from './Contexts/ContextProvider'
import LevelOne from './Components/LevelOne'
import LevelOneUsingContext from './Components/LevelOneUsingContext'

class App extends Component {

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

  render(){
    return (
      <div className="App">
        <h1>Hi from App root - using lifting state up</h1>
        <LevelOne theme={this.state.theme} uid={this.state.uid}>
          <span>Level one child</span>
        </LevelOne>

        <br/><p>-------------------------------------------------------------------------------------------------------------------------</p><br/>

        <h1>Hi from App root - using contexts api</h1>
        <ContextProvider>
          <LevelOneUsingContext></LevelOneUsingContext>
        </ContextProvider>

        <br/><p>-------------------------------------------------------------------------------------------------------------------------</p><br/>

        <h1>Hi from App root - using contexts api v2</h1>
        <Context.Provider value={{state: this.state, increaseCounter: this.increaseCounter, decreaseCounter: this.decreaseCounter,
                                        click1: this.click1, click2: this.click2 }}>
          <LevelOneUsingContext></LevelOneUsingContext>
        </Context.Provider>
      </div>
    )
  }
}

export default App