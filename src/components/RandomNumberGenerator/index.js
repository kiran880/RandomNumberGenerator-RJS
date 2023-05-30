// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  ChangeNumber = () => {
    const getRandom = Math.ceil(Math.random() * 100)

    this.setState({count: getRandom})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.ChangeNumber}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
