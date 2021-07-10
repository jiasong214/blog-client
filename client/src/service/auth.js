export default class AuthService {
  constructor (http) {
    this.http = http;
  }

  async login(username, password) {
    return await this.http.fetch(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  }

  async me() { 
    return this.http.fetch(`/auth/me`, {
      method: 'GET',
    });
  }

  async logout() {
    // this.tokenStorage.clearToken();
  }
}