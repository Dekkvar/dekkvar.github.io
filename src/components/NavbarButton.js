import React from "react";
import '../stylesheets/NavbarButton.css';

function NavbarButton(props) {
  return (
    <button className={`button-container ${props.children.toLowerCase().replace(' ', '-')}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default NavbarButton;