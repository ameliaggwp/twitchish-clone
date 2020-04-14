import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  //takes two arguments. First is JSX. Second argument references which div it should render in. We've added a sibling div in index.html
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        //this onclick stops our program from looking to the parent for what the onclick should be/redirecting us to the stream list
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
