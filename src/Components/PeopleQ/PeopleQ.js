import React from 'react'
import PetfulApiService from '../../Services/petful-api-service'

import './PeopleQ.css'

class PeopleQ extends React.Component {

  state = {
    // peopleQ: this.props.peopleQ
    peopleQ: ['Bob', 'Sarah', 'John', 'Candice']
  }

  componentDidMount() {

  }
  
  render() {
    const people = []
    this.state.peopleQ.forEach((person, i) => {
      people.push(
        <li key={i}>{person}</li>
      )
    })
    const { inQ } = this.props
    return (
      <div className='PeopleQ'>
        <h3>
          Hopeful pet owners
        </h3>
        <ul>Next up: {people}</ul>
        <p>
          {inQ ? 'Your position in Q: ' : ''}
        </p>
      </div>
    )
  }
}

export default PeopleQ
