import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_lebels">
          <Chip text="Frontend" color="green" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card_title">Title Hear</div>
      <div className="card_footer">
        <p>
          <Clock />
          10 Aug
        </p>
        <p>
          <CheckSquare /> 1/2
        </p>
      </div>
    </div>
  );
}

export default Card;
