import React, { Component } from 'react'
import axios from 'axios'

class HangoutsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hangouts: []
    }
  }

  componentDidMount() {
  axios.get('http://localhost:3001/api/v1/hangouts.json')
  .then(response => {
    console.log(response)
    this.setState({ideas: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        Hangouts
      </div>
    )
  }
}

export default HangoutsContainer
