import React from "react";
import ReactDOM from "react-dom";
import PostForm from "./PostForm";
import { shallow } from "enzyme";

describe("PostForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostForm />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PostForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a username input", () => {
    const titleInput = wrapper.find("input[name='title']");
    expect(titleInput.exists()).toBe(true);
  });

  it("renders a password input", () => {
    const bodyInput = wrapper.find("input[name='body']");
    expect(bodyInput.exists()).toBe(true);
  });

  it("renders a storeId input", () => {
    const userIdInput = wrapper.find("input[name='userId']");
    expect(userIdInput.exists()).toBe(true);
  });

  it("renders a login button", () => {
    const loginButton = wrapper.find("input[type='submit']");
    expect(loginButton.exists()).toBe(true);
  });
});
