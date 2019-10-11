import config from '../config'

const PetfulApiService = {
  url: config.API_ENDPOINT,

  getAllDogs() {
    return fetch('DOGS ENDPOINT', {})
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getAllCats() {
    return fetch('CATS ENDPOINT', {})
    .then(res => (!res.ok) ? res.json().then(e=> Promise.reject(e)) : res.json())
  },
  getAllPeople() {

  },
  adoptDog() {

  }, 
  adoptCat() {

  },
  joinQ() {

  },
  leaveQ() {

  }
}

export default PetfulApiService