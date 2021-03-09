import { Component } from 'react' 
import MoodPoints from '../mood-points/MoodPoints.jsx'
import MoodNote from '../mood-note/MoodNote.jsx'

export default class MoodTracker extends Component {
  // create state and set initial state the boomer way
  // constructor() {
  //   // invoke super first!
  //   // gets functionality from Component
  //   super()
  //   this.state = {
  //     points: 99
  //   }
  //   console.log(this)
  //   this.handleIncreaseMood = this.handleIncreaseMood.bind(this)
  // }

  // class field declaration method of defining state
  state = {
    points: 11
  }

  // event handlers
  handleIncreaseMood = () => {
    this.setState((whatever) => {
      return {
        points: whatever.points + 1
      }
    }, () => console.log(this.state))
    // this code down here runs first
    // console.log(this.state)
  }

  handleDecreaseMood = () => {
    this.setState((prevState) => {
      return {
        points: prevState.points - 1
      }
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <MoodPoints points={this.state.points} />

        <button onClick={this.handleIncreaseMood}>🎸</button>

        <button onClick={this.handleDecreaseMood}>☠️</button>

        <h3>My Notes:</h3>

        <MoodNote
          points={5}
          date={'date'}
          note={'test note'}
        />
      </div>
    )
  }
}
