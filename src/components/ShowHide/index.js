// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {value1: false, value2: false}

  hideFirst = () => {
    this.setState(prevState => ({value1: !prevState.value1}))
  }

  hideLast = () => {
    this.setState(prevState => ({value2: !prevState.value2}))
  }

  render() {
    const {value1, value2} = this.state

    const text1 = value1 && 'Joe'
    const text2 = value2 && 'Jonas'

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <div>
            <button type="button" className="b1" onClick={this.hideFirst}>
              Show/Hide Firstname
            </button>
            <p>{text1}</p>
          </div>
          <div>
            <button type="button" className="b1" onClick={this.hideLast}>
              Show/Hide Lastname
            </button>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
