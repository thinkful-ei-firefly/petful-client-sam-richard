import React from 'react'
import PetfulApiService from '../../Services/petful-api-service'

import './DogsQ.css'

class DogsQ extends React.Component {
  
  state = {
    // dogQ: this.props.dogQ
    dogQ: [{
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Athena',
      sex: 'Female',
      age: 2,
      breed: 'Golden Retriever',
      story: 'Owners Passed away'
    },
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    }],
    qPosition: 0
  }

  componentDidMount() {
    
  }

  nextDog = () => {
    this.setState({ qPosition: this.state.qPosition+1 })
  }

  previousDog = () => {
    this.setState({ qPosition: this.state.qPosition-1 })
  }

  render() {
    const { qPosition }= this.state
    const dog = this.state.dogQ[this.state.qPosition]
    let adoptable = true;
    if (qPosition !== 0) adoptable = false
    if (this.props.firstInQ === false) adoptable = false
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
        <button disabled={adoptable ? false : true}>Adopt!</button><br />
        <button onClick={this.previousDog} hidden={!qPosition}>Previous Dog</button>
        <button onClick={this.nextDog} hidden={qPosition === this.state.dogQ.length-1}>Next Dog</button>
      </div>
    )
  }
}

export default DogsQ
