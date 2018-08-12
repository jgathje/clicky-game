import React from "react";
import "./Scoreboard.css"

const Scoreboard = props => (
    <div className="navbar">
        <div id="score">Current Score: {props.score}</div>
        {props.status}
        <div id="score">High Score: {props.hiScore}</div>
    </div>
)

export default Scoreboard