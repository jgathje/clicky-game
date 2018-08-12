import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <img alt={props.name} src={props.image} />
  </div>
);

export default FriendCard;
