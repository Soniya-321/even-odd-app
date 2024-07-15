// Write your code here
import {Component} from 'react'
import './index.css'



class EvenOddApp extends Component {
  state = {text: 'Even', randomNum: 0}
  
  getRandomCount = () => {
    const randomNum = Math.floor(Math.random() * 101)
    console.log(randomNum)
    if (randomNum % 2 === 0) {
      this.setState((prevState) => ({
        text: "Even", randomNum: randomNum
      }))
    }
    else {
      this.setState((prevState) => ({
        text: "Odd", randomNum: randomNum
      }))
    }
  }

  render() {
    const { text, randomNum } = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {randomNum}</h1>
          <p className="count">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomCount}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
