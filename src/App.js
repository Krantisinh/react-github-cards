import "./App.scss";

import React from "react";
import CardList from './components/card-list';
import Search from "./components/search";
import Header from './components/header';

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profile) => {
    this.setState({ profiles: [...this.state.profiles, profile] });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Search callBack={this.addNewProfile} />
        <CardList data={this.state.profiles} />
      </div>
    );
  }
}

export default App;
