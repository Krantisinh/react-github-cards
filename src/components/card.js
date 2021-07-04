import React from "react";

export default class Card extends React.Component {
  render() {
    const user = this.props;

    return (
      <div className="app-card">
        <img className="app-card__image" src={user.avatar_url}></img>
        <div className="app-card__info">
          <div className="app-card__name">{user.name}</div>
          <div className="app-card__company">{user.company}</div>
        </div>
      </div>
    );
  }
}
