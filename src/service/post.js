export default class PostService {
  constructor (http) {
    this.http = http;
  }

  async getPosts() {
    return this.http.fetch(`/posts`, {
      method: 'GET',
    });
  }

  async getPostById(id) {
    return this.http.fetch(`/posts/${id}`, {
      method: 'GET',
    });
  }

  async createPost(title, text) {
    return this.http.fetch(`/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, text })
    });
  }

  async updatePost(id, title, text) {
    return this.http.fetch(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, text })
    });
  }

  async deletePost(id) {
    return this.http.fetch(`/posts/${id}`, {
      method: 'DELETE',
    });
  }
}