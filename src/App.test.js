import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import handleInputChange from "./App";
import { shallow } from "enzyme";

describe("PostForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
