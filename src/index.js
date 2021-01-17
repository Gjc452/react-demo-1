import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {x: 1, y: 2}
  }

  add = () => {
    this.setState((state) => ({x: state.x + 1}))
    this.setState((state) => ({x: state.x + 1}))
  }
  add1 = () => {
    this.setState({x: this.state.x + 1})
    this.setState({x: this.state.x + 1})
  }

  render() {
    return (
      <div className='App'>
        App
        <button onClick={this.add}>+1</button>
        <B name={this.state.x}/>
      </div>
    )
  }
}

class B extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}


const rootElement = document.querySelector('#root')
ReactDOM.render(<App/>, rootElement)