import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <h1>Petful</h1>
      <img src='https://www.condorferries.co.uk/media/2455/taking-your-pet-5.jpg' alt='pets' />
      <p>
        Petful handles the adoption process a little differently than other shelters.
        At any given time you will only be given the option to adopt the cat and/or dog that have been with us the longest.
        Since we potentially will have a lot of people looking to adopt at any given time, you won't necessarily
        have the option to adopt right away if someone else got here first. On the next page you will be given your
        current position in the adoption queue to know when you will get your chance to adopt a pet, and while waiting
        you will be allowed to view the other pets waiting in line for adoption, not just the one available.
        But remember, when it comes your turn to adopt you will still only have the option of the first cat and dog
        in the queue.
      </p>
      <Link to='/pets'><button>Continue</button></Link>
    </div>
  )
}

export default LandingPage
