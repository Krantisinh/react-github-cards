import React from "react";
import Card from "./card";

export default class CardList extends React.Component {
  render() {
    return (
      <>
        {this.props.data.map((x) => (
          <Card {...x} key={x.id} />
        ))}
      </>
    );
  }
}
