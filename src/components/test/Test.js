import React, { Component } from 'react';
// import axios from 'axios';

class Test extends Component {
  state = {
    title: '',
    body: '',
  };
  // Get request using fetch
  async componentDidMount() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({
      title: data.title,
      body: data.body,
    });
  }
  // Get request using axios
  // async componentDidMount() {
  //   const response = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts/1'
  //   );
  //   console.log(response);
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className='display-4'>{title}</h1>
        <p className='lead'>{body}</p>
      </div>
    );
  }
}

export default Test;
