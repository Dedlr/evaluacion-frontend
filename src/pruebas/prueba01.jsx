import React, { Component } from "react";
import { render } from "react-dom";


class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  reiniciar = () => {
    this.setState({
      contador: this.state.contador = 0
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button><br></br><br></br>
        <button onClick={this.reiniciar}>Iniciar</button>
      </div>
    );
  }
}

export default function ContadorApp() {
  return (
    <div>
        <h1>Prueba 01</h1>
        <p>
            1. Impremente un nuevo botón que haga un Reset a Cero (0), al
            contador de la clase.
        </p>
      <Contador />
    </div>
  );
}
