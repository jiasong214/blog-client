export default class PostService {
  constructor () {
    this.baseURL = 'http://localhost:8080';
  }

  posts = [
    {
      "id": 1,
      "category": ["#React"],
      "title": "This is first post",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci a metus pharetra rutrum. Etiam condimentum magna sed imperdiet scelerisque. Quisque tristique, elit sit amet posuere eleifend, augue dolor malesuada elit, a ornare lectus odio a tellus. Cras consequat non nisi non rhoncus. Nam ac libero a elit elementum efficitur. Sed suscipit vulputate vehicula.",
      "createAt": new Date().toString()
    },
    {
      "id": 2,
      "category": ["#React", "#Javascript"],
      "title": "This is second post",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci a metus pharetra rutrum. Etiam condimentum magna sed imperdiet scelerisque. Quisque tristique, elit sit amet posuere eleifend, augue dolor malesuada elit, a ornare lectus odio a tellus. Cras consequat non nisi non rhoncus. Nam ac libero a elit elementum efficitur. Sed suscipit vulputate vehicula.",
      "createAt": new Date().toString()
    },
    {
      "id": 3,
      "category": ["#React", "#Javascript", "#Node"],
      "title": "This is third post",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur orci a metus pharetra rutrum. Etiam condimentum magna sed imperdiet scelerisque. Quisque tristique, elit sit amet posuere eleifend, augue dolor malesuada elit, a ornare lectus odio a tellus. Cras consequat non nisi non rhoncus. Nam ac libero a elit elementum efficitur. Sed suscipit vulputate vehicula.",
      "createAt": new Date().toString()
    }
  ]

  async getPosts() {
    return this.posts;
    // const res =  await fetch(`${this.baseURL}/post`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'GET'
    // });

    // let data;
    // try{
    //   data = res.json();
    // }catch(err){
    //   console.error(err)
    // }

    // return data;
  }

  async getPostById(id) {
    return this.posts.filter(post => parseInt(post.id) === parseInt(id));
  }

  async getPostsByCategory(category) {
    if(category){
      return this.posts.filter((post) => (
        post.category.includes(category)
      ))
    }

    return this.posts;
  }

  async createPost(category, title, text) {
    const post = {
      id: Date.now().toString(),
      category,
      title,
      text,
      createAt: new Date().toString()
    }

    return this.posts = [post, ...this.posts];
  }

  async updatePost(id, category, title, text) {
    const post = this.posts.find((post) => parseInt(post.id) === parseInt(id));

    post.category = category;
    post.title = title;
    post.text = text;

    return this.posts;
  }

  async deletePost(id) {
    return this.posts =  this.posts.filter((post) => parseInt(post.id) !== parseInt(id));
  }

  async getCategories() {
    const categoryArr = [];
    this.posts.forEach((post) => {
      if(!post.category) return;
      
      post.category.forEach((item) => {
        if(categoryArr.includes(item)) return;
        categoryArr.push(item);
      })
    });

    return categoryArr;
  }
}