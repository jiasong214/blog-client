export default class PostService {
  constructor (tokenStorage) {
    this.baseURL = 'http://localhost:8080';
    this.token = tokenStorage.getToken();
  }

  async getPostsByCategory(category) {
    const query = category ? `/category/${category}` : '';

    const res =  await fetch(`${this.baseURL}/post${query}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'GET'
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err);
    }

    return data;
  }

  async getPostById(id) {
    const res =  await fetch(`${this.baseURL}/post/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'GET'
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err)
    }

    return data;
  }

  async createPost(category, title, text) {
    const res =  await fetch(`${this.baseURL}/post`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ category, title, text })
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err)
    }

    return data;
  }

  async updatePost(id, category, title, text) {
    const res =  await fetch(`${this.baseURL}/post/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ category, title, text })
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err)
    }

    return data;
  }

  async deletePost(id) {
    return await fetch(`${this.baseURL}/post/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });
  }

  async getCategories() {
    const res =  await fetch(`${this.baseURL}/category`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      method: 'GET'
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err)
    }

    return data;
  }
}