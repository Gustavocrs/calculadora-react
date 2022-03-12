import Botao from "./components/Botao";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";

function App() {
  const [visorMemoria, setVisorMemoria] = useState([""]);
  const [visor, setVisor] = useState([""]);

  function Calcular() {
    // setVisor(eval(visorMemoria));
    setVisorMemoria("");
  }

  function Limpar(){
    setVisor('')
    setVisorMemoria('')
  }

  return (
    <div className="container">
      <h1>Calculadora React</h1>
      <div className="calc">
        <Input
          className="mini"
          type="text"
          value={visorMemoria}
          onChange={(valorMemoria) => setVisorMemoria(valorMemoria)}
        />
        <Input
          className="inputPadrao"
          type="text"
          value={visor}
          onChange={(valor) => setVisor(valor)}
        />
        <div className="teclado">
          <div className="numeros">
            <Botao
              className="btn"
              text="%"
              value="%"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao className="btn" text="CE" onClick={Limpar} />
            <Botao className="btn" text="C" />

            <Botao
              className="btn"
              text="7"
              value="7"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="8"
              value="8"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="9"
              value="9"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="4"
              value="4"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="5"
              value="5"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="6"
              value="6"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="1"
              value="1"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="2"
              value="2"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="3"
              value="3"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="."
              value="."
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn"
              text="0"
              value="0"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao className="btn" text="=" value="=" onClick={Calcular} />
          </div>

          <div className="operadores">
            <Botao className="btn" text="<" />
            <Botao
              className="btn btnOpe"
              text="/"
              value="/"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn btnOpe"
              text="*"
              value="*"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn btnOpe"
              text="-"
              value="-"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
            <Botao
              className="btn btnOpe"
              text="+"
              value="+"
              onClick={(e) => setVisorMemoria(visorMemoria + e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
