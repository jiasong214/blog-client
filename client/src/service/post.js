export default class PostService {
  constructor () {
    this.baseURL = 'http://localhost:8080';
  }

  async getPostsByCategory(category) {
    const query = category ? `/category/${category}` : '';

    console.log(`${this.baseURL}/post${query}`)

    const res =  await fetch(`${this.baseURL}/post${query}`, {
      headers: {
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

  async getPostById(id) {
    const res =  await fetch(`${this.baseURL}/post/${id}`, {
      headers: {
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
    const res =  await fetch(`${this.baseURL}/post/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    let data;
    try{
      data = res.json();
    }catch(err){
      console.error(err)
    }

    return data;
  }

  async getCategories() {
    const res =  await fetch(`${this.baseURL}/category`, {
      headers: {
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