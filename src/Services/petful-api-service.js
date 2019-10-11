import config from '../config'

const PetfulApiService = {
  url: config.API_PRODUCTION_ENDPOINT,

  getAllDogs() {
    return fetch(this.url+'/dogs/getalldogs', {})
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getAllCats() {
    return fetch(this.url+'/cats/getallcats', {})
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getAllPeople() {
    return fetch(this.url+'/people', {})
      .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  adoptDog() {
    return fetch(this.url+'/dogs/adoptdog', {
      method: 'DELETE'
    })
    // .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  }, 
  adoptCat() {
    return fetch(this.url+'/cats/adoptcat', {
      method: 'DELETE'
    })
    // .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  joinQ(name) {
    return fetch(this.url+'/people/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(name)
    })
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  leaveQ() {
    return fetch(this.url+'/people', {
      method: 'DELETE'
    })
    // .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  }
}

export default PetfulApiService