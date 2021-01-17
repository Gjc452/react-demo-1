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
  } // 会进行两次 +1 操作
  add1 = () => {
    this.setState({x: this.state.x + 1})
    this.setState({x: this.state.x + 1})
  } // 只会进行一次 +1 操作，因为 setState 不会立即改变 this.state

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