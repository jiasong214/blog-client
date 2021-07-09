export default class PostService {
  constructor (http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  //common header part
  getHeaders() {
    //get a token from storage and return with headers format
    const token = this.tokenStorage.getToken();
    return { Authorization: `Bearer ${token}`, };
  }


  async getPosts() {
    return this.http.fetch(`/post`, {
      method: 'GET',
      headers: this.getHeaders()
    });
  }

  async getPostById(id) {
    return this.http.fetch(`/post/${id}`, {
      method: 'GET',
      headers : this.getHeaders()
    });
  }

  async createPost(category, title, subtitle, text) {
    return this.http.fetch(`/post`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ category, title, subtitle, text })
    });
  }

  async updatePost(id, category, title, subtitle, text) {
    return this.http.fetch(`/post/${id}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({ category, title, subtitle, text })
    });
  }

  async deletePost(id) {
    return this.http.fetch(`/post/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
  }

  async getCategories() {
    return this.http.fetch(`/category`, {
      method: 'GET',
      headers: this.getHeaders()
    });
  }
}