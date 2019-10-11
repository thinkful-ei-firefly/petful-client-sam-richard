import React from 'react'
import PetfulApiService from '../../Services/petful-api-service'

import './DogsQ.css'

class DogsQ extends React.Component {
  
  state = {
    dogQ: null,
    qPosition: 0,
    loading: true
  }

  componentDidMount() {
    PetfulApiService.getAllDogs()
      .then(dogs => this.setState({ dogQ: dogs, loading: false}))
  }

  nextDog = () => {
    this.setState({ qPosition: this.state.qPosition+1 })
  }

  previousDog = () => {
    this.setState({ qPosition: this.state.qPosition-1 })
  }

  adoptDog = () => {
    console.log('adopting dog')
    PetfulApiService.adoptDog()
      .then(res => {
        window.alert('Congrats! You adopted a dog! Rejoin the que if you want to adopt more pets.')
        let { dogQ }= this.state
        dogQ.shift()
        this.setState( { dogQ: dogQ } )
        this.props.resetPosition()
      })
  }

  render() {
    if (this.state.loading) return ('loading')
    const { qPosition }= this.state
    const dog = this.state.dogQ[this.state.qPosition]
    let adoptable = true;
    if (qPosition !== 0) adoptable = false
    if (this.props.position !== 0) adoptable = false
    return (
      <div className='DogsQ'>
        <img src={dog.imageURL} alt={dog.imageDescription}/>
        <h3>{dog.name}</h3>
        <ul>
          <li>sex: {dog.sex}</li>
          <li>age: {dog.age}</li>
          <li>breed: {dog.breed}</li>
          <li>story: {dog.story}</li>
        </ul>
        <button onClick={this.adoptDog} className={adoptable ? '' : 'disabled'} disabled={adoptable ? false : true}>Adopt</button><br />
        <button onClick={this.previousDog} hidden={!qPosition}>Previous Dog</button>
        <button onClick={this.nextDog} hidden={qPosition === this.state.dogQ.length-1}>Next Dog</button>
      </div>
    )
  }
}

export default DogsQ
