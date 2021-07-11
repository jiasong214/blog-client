export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    //set all http options, and fetch data
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    });

    //fomat data to json, and catch error
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    //if there is error in respond, throw error message
    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : 'http error!';

      return new Error(message);
    }

    //if everything is okay, return json data
    return data;
  }
}
