const TOKEN = 'token';

export default class TokenStorage {
  saveToken(token) {
    //비동기 때문에 안넘어옴
    console.log(token)
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}