import React from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import "./Board.css";

function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To Do &nbsp; <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board_cards costom-scroll">
        <Card />
        <Card />
        <Editable />
      </div>
    </div>
  );
}

export default Board;
