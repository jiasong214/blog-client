export default class AuthService {
  constructor (tokenStorage) {
    this.baseURL = 'http://localhost:8080';
    this.tokenStorage = tokenStorage;
  }

  async login(username, password) {
    const data = await fetch(`${this.baseURL}/auth/login`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.tokenStorage.saveToken(data.token);
    return data.json();
  }

  async me() {
    const token = this.tokenStorage.getToken();

    return fetch(`${this.baseURL}/auth/me`, {
      method: 'GET',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}