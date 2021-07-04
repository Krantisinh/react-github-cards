import React from "react";

export default class Search extends React.Component {
  state = {
    userName: "",
  };

  onInputHandler = (x) => {
    this.setState({ userName: x.target.value });
    console.log(x.target.value);
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    ).then((data) => data.json());

    this.props.callBack(response);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <div className="app-search-container">
        <form onSubmit={this.onSubmitHandler}>
          <input
            placeholder="GitHub username"
            value={this.state.userName}
            onInput={this.onInputHandler}
            className="app-search-input"
          ></input>
          <button className="app-search-button">Add Card</button>
        </form>
      </div>
    );
  }
}
