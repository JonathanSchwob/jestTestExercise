import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <form>
        <label>
          Title:
          <input
            onChange={this.props.onChange}
            name="title"
            type="text"
            value={this.props.title}
          />
        </label>
        <br />
        <label>
          Body:
          <input
            onChange={this.props.onChange}
            name="body"
            type="text"
            value={this.props.body}
          />
        </label>
        <br />
        <label>
          UserID:
          <input
            onChange={this.props.onChange}
            name="userId"
            type="text"
            value={this.props.userId}
          />
        </label>
        <br />
        <input type="submit" value="Post" onClick={this.props.onPost} />
      </form>
    );
  }
}

export default PostForm;
