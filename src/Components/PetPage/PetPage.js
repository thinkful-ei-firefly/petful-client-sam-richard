import React from 'react'

import Signup from '../Signup/Signup'
import PeopleQ from '../PeopleQ/PeopleQ'
import DogsQ from '../DogsQ/DogsQ'
import CatsQ from '../CatsQ/CatsQ'
import PetfulApiService from '../../Services/petful-api-service'
import TokenService from '../../Services/token-service'

class PetPage extends React.Component {

  state = {
    peopleQ: null,
    position: null,
    loadingCats: true,
    loadingDogs: true,
    loadingPeople: true,
    id: null
  }

  componentDidMount() {
    const id = TokenService.getToken()
    this.setState({ id })
    this.setState()
    PetfulApiService.getAllPeople()
      .then(people => this.setState({ peopleQ: people, loadingPeople:false },
        () => {
          console.log(this.state.peopleQ)
          const position = this.checkPosition();
          this.setState({ position })
        }
      ))
      
  }

  checkPosition() {
    console.log('checking position')
    const token = TokenService.getToken()
    console.log(token)
    if (!token) {
      return null
    }
    const index = this.state.peopleQ.findIndex(person => person.id === token)
    if (index < 0) return null
    console.log('setting position to '+index)
    return index;
  }

  joinQ = (event) => {
    event.preventDefault();
    console.log('joining')
    const name = {name: event.target.name.value}
    PetfulApiService.joinQ(name)
      .then(res => {
        console.log(res)
        TokenService.saveToken(res)
        this.setState({ peopleQ: [...this.state.peopleQ, {id: res, name: name.name}], id: res }, 
          () => {
            const position = this.checkPosition()
            this.setState({ position })
          }
        )
      })
  }

  // adoptDog = () => {
  //   PetfulApiService.adoptDog()
  //     .then(res => {
  //       TokenService.clearToken();
  //       let { dogQ, peopleQ }= this.state
  //       dogQ.shift()
  //       peopleQ.shift()
  //       this.setState( { dogQ: dogQ, position: null } )
  //     })
  //   PetfulApiService.leaveQ()
  // }

  // adoptCat = () => {
  //   PetfulApiService.adoptCat()
  //     .then(res => {
  //       TokenService.clearToken();
  //       let { catQ, peopleQ }= this.state
  //       catQ.shift()
  //       peopleQ.shift()
  //       this.setState( { catQ: catQ, position: null } )
  //     })
  //   PetfulApiService.leaveQ()
  // }

  resetPosition = () => {
    TokenService.clearToken()
    let peopleQ = this.state.peopleQ
    peopleQ.shift()
    this.setState({ peopleQ, position:null })
    PetfulApiService.leaveQ()
  }


  
  render() {
    const { position, peopleQ, loadingPeople} = this.state
    return (
      <div>
        <h1>Petful</h1>
        {position !== null ? '' : <Signup onSubmit={this.joinQ}/>}
        <PeopleQ peopleQ = {peopleQ} position={this.state.position} loading={loadingPeople}/>
        <h2>Pets Currently Available</h2>
        <DogsQ position={this.state.position} resetPosition={this.resetPosition} /><br />
        <CatsQ position={this.state.position} resetPosition={this.resetPosition} />
      </div>
    )
  }
}

export default PetPage
