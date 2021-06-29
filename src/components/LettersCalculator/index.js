// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: ''}

  onTypeSearchInput = event => {
    const {value} = event.target

    this.setState({phrase: value})
  }

  render() {
    const {phrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onTypeSearchInput}
                placeholder="Enter the phrase"
                type="text"
              />
            </form>
            <p className="letters-count">No.of letters: {phrase.length}</p>
          </div>
          <div className="image-section">
            <img
              alt="letters calculator"
              className="letters-calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
