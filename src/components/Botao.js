import React from "react";
import "./Botao.css";

function Botao(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      value={props.value}
    >
      {props.text}
    </button>
  );
}

export default Botao;
