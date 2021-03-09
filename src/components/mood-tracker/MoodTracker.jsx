import { Component } from 'react' 
import MoodPoints from '../mood-points/MoodPoints.jsx'

export default class MoodTracker extends Component {
  render() {
    return (
      <div>
        <MoodPoints points={11} />
      </div>
    )
  }
}