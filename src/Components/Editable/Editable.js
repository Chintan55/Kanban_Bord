import React, { useState } from "react";
import { X } from "react-feather";

function Editable(props) {
  const [showedit, setShowedit] = useState(false);
  return (
    <div className="editable">
      {showedit ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
          className="editable edit"
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder={props.placeholder || ""}
          />
          <div className="editable edit footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowedit(false)} />
          </div>
        </form>
      ) : (
        <p onClick={() => setShowedit(true)}>{props.text || "Add item"}</p>
      )}
    </div>
  );
}

export default Editable;
