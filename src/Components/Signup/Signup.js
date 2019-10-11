import React from 'react'

import './Signup.css'

const Signup = (props) => {
  return (
    <form className='Signup' onSubmit={(event) => props.onSubmit(event)}>
      <legend>I want to adopt!</legend>
      <label>
        My name is 
        <input type='text' placeholder='John Doe' name='name' required></input>
        <button type='submit'>Send</button>
      </label>
    </form>
  )
}

export default Signup
