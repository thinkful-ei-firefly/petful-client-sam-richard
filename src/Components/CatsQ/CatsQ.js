import React from 'react'
import PetfulApiService from '../../Services/petful-api-service'

import './CatsQ.css'

class CatsQ extends React.Component {
  
  state = {
    // catQ: this.props.catQ
    catQ: [{
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Snowball',
      sex: 'Male',
      age: 104,
      breed: 'Bengal',
      story: 'Thrown off a cliff'
    }],
    qPosition: 0
  }

  componentDidMount() {
    
  }

  nextCat = () => {
    this.setState({ qPosition: this.state.qPosition+1 })
  }

  previousCat = () => {
    this.setState({ qPosition: this.state.qPosition-1 })
  }

  render() {
    const { qPosition }= this.state
    const cat = this.state.catQ[this.state.qPosition]
    let adoptable = true;
    if (qPosition !== 0) adoptable = false
    if (this.props.firstInQ === false) adoptable = false
    return (
      <div className='CatsQ'>
        <img src={cat.imageURL} alt={cat.imageDescription}/>
        <h3>{cat.name}</h3>
        <ul>
          <li>sex: {cat.sex}</li>
          <li>age: {cat.age}</li>
          <li>breed: {cat.breed}</li>
          <li>story: {cat.story}</li>
        </ul>
        <button disabled={adoptable ? false : true}>Adopt!</button><br />
        <button className='nav' onClick={this.previousCat} hidden={!qPosition}>Previous Cat</button>
        <button className='nav' onClick={this.nextCat} hidden={qPosition === this.state.catQ.length-1}>Next Cat</button>
      </div>
    )
  }
}

export default CatsQ
