import React from 'react'

import Signup from '../Signup/Signup'
import PeopleQ from '../PeopleQ/PeopleQ'
import DogsQ from '../DogsQ/DogsQ'
import CatsQ from '../CatsQ/CatsQ'
import PetfulApiService from '../../Services/petful-api-service'

class PetPage extends React.Component {

  state = {
    inQ: false,
    peopleQ: null,
    dogQ: null,
    catQ: null,
    firstInQ: true
  }

  componentDidMount() {
    // PetfulApiService.getAllDogs()
    // .then(dogs => this.setState({ dogQ: dogs}))
    // PetfulApiService.getAllCats()
    // .then(cats => this.setState({ catQ: cats}))
    // PetfulApiService.getAllPeople()
    // .then(people => this.setState({ peopleQ: people }))
  }

  joinQ(event) {
    event.preventDefault();
    const name = event.target.name.value
    console.log(name)
    // PetfulApiService.joinQ()
    //   .then(res => this.setState({ inQ: true }))
  }
  
  render() {
    const { inQ, peopleQ, dogQ, catQ, firstInQ } = this.state
    return (
      <div>
        <h1>Petful</h1>
        {inQ ? '' : <Signup onSubmit={this.joinQ}/>}
        <PeopleQ inQ={inQ} firstInQ={firstInQ} peopleQ = {peopleQ}/>
        <h2>Pets Currently Available</h2>
        <DogsQ inQ={inQ} firstInQ={firstInQ} dogQ={dogQ} />
        <CatsQ inQ={inQ} firstInQ={firstInQ} catQ={catQ} />
      </div>
    )
  }
}

export default PetPage
