import React, { Component } from 'react'
import axios from 'axios'

class TripsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
  axios.get('http://localhost:3001/api/v1/trips.json')
  .then(response => {
    console.log(response)
    this.setState({ideas: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        Trips
      </div>
    )
  }
}

export default TripsContainer
