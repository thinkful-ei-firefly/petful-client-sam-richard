import React from 'react'

import './PeopleQ.css'

class PeopleQ extends React.Component {

  
  render() {
    const people = []
    const { position } = this.props
    if (this.props.peopleQ) {
      this.props.peopleQ.forEach((person, i) => {
        people.push(
          <li key={i}>{person.name}</li>
        )
      })
    }
    return (
      <div className='PeopleQ'>
        <h3>
          Hopeful pet owners
        </h3>
        <ul>Next up: {people}</ul>
        <p className='qPosition'>
          {position===0 ? "It's your turn to pick a pet!" : (position!==null ? `Your position in the Queue is ${position+1}` : '')}
        </p>
      </div>
    )
  }
}

export default PeopleQ
