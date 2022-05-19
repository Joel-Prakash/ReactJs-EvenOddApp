import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.random() * 100
    const roundRandomNumber = Math.ceil(randomNumber)
    this.setState(presentNumber => ({
      number: presentNumber.number + roundRandomNumber,
    }))
  }

  render() {
    const {number} = this.state
    let paraText
    if (number % 2 === 0) {
      paraText = <p className="para1">Count is Even</p>
    } else {
      paraText = <p className="para1">Count is Odd</p>
    }

    return (
      <div>
        <h1 className="main-heading">Count {number}</h1>
        {paraText}
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="para2">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
