import React from 'react'
import PetfulApiService from '../../Services/petful-api-service'

import './CatsQ.css'

class CatsQ extends React.Component {
  
  state = {
    catQ: null,
    qPosition: 0,
    loading: true
  }

  componentDidMount() {
    PetfulApiService.getAllCats()
      .then(cats =>  this.setState({ catQ: cats, loading: false }))
  }

  nextCat = () => {
    this.setState({ qPosition: this.state.qPosition+1 })
  }

  previousCat = () => {
    this.setState({ qPosition: this.state.qPosition-1 })
  }

  adoptCat = () => {
    PetfulApiService.adoptCat()
      .then(res => {
        window.alert('Congrats! You adopted a dog! Rejoin the que if you want to adopt more pets.')
        let { catQ }= this.state
        catQ.shift()
        this.setState( { catQ: catQ } )
        this.props.resetPosition()
      })
  }

  render() {
    if (this.state.loading) return ('loading')
    const { qPosition }= this.state
    const cat = this.state.catQ[this.state.qPosition]
    let adoptable = true;
    if (qPosition !== 0) adoptable = false
    if (this.props.position !== 0) adoptable = false
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
        <button onClick={this.adoptCat} disabled={adoptable ? false : true}>Adopt!</button><br />
        <button className='nav' onClick={this.previousCat} hidden={!qPosition}>Previous Cat</button>
        <button className='nav' onClick={this.nextCat} hidden={qPosition === this.state.catQ.length-1}>Next Cat</button>
      </div>
    )
  }
}

export default CatsQ
