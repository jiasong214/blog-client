export default class AuthService {
  constructor (http) {
    this.http = http;
  }

  async login(username, password) {
    return this.http.fetch(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  }

  async logout() {
    return this.http.fetch(`/auth/logout`, {
      method: 'POST',
    });
  }

  async me() { 
    return this.http.fetch(`/auth/me`, {
      method: 'GET',
    });
  }
}