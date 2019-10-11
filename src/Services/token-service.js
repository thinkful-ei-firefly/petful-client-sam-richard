import config from '../config';

const TokenService = {
  saveToken(token) {
    console.log('setting token '+token)
    return window.localStorage.setItem(config.TOKEN, token)
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN)
  },
  clearToken() {
    return window.localStorage.removeItem(config.TOKEN)
  },
  hasToken() {
    return !!TokenService.getToken()
  }
}

export default TokenService;