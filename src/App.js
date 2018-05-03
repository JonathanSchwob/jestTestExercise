import React, { Component } from "react";
import PostForm from "./components/PostForm";
import axios from "axios";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlePost(event) {
    event.preventDefault();

    let config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };

    let body = JSON.stringify({
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    });

    axios
      .post("https://jsonplaceholder.typicode.com/posts", body, config)
      .then(response => {
        console.log("Response", response);
        // this.setState({
        //   jwt: response.data
        // });
      })
      .catch(error => {
        console.log("Post", error);
      });
  }

  render() {
    return (
      <div style={styles}>
        <header className="App-header">
          <h1 className="App-title">Jest Test Exercise</h1>
        </header>
        <PostForm
          onChange={this.handleInputChange}
          onPost={this.handlePost}
          title={this.state.title}
          body={this.state.body}
          userId={this.state.userId}
        />
      </div>
    );
  }
}

export default App;
