import React, { Component } from "react";
import { render } from "react-dom";


class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  syncChanges = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncChanges("email", ev.target.value);
          }}
          type="email"
          value={this.state.email}
          placeholder="Email"
        />
        <input
          onChange={ev => {
            this.syncChanges("password", ev.target.value);
          }}
          type="password"
          value={this.state.password}
          placeholder="*********"
        />
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar sesión"
          />
        </div>
      </form>
    );
  }
}

export default function FormularioApp() {
  return (
    <div>
        <h1>Prueba 02</h1>
        <p>1. Optimice el siguiente  componente de clase  para que solo tenga
        un método de sincronización, para actualizar los valores de los
        identificadores email y password en el estado del componente</p>
      <Formulario />
    </div>
  );
}
