import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 1
    }
  }

  add = () => {
    this.setState({
      x: this.state.x + 1
    })
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
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('旧的 props')
    console.log(this.props)
    console.log('props变化了')
    console.log('新的 props')
    console.log(nextProps)
  }

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