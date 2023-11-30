import React, { Component } from "react";
import { render } from "react-dom";
import './prueba03.css'

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>Id</th>
              <th style={{ width: '25%' }}>Titulo</th>
              <th style={{ width: '33%' }}>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articles.map(article => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default function BlogApp() {
  return (
    <div>
        <h1>Prueba 03</h1>
        <p>
        1. Revise y entienda que hace el siguiente componente
        </p>
        <p>
        2. Usando cualquier técnica de maquetación web, mejore
            la presentación de los datos al usuario
        </p>
        <p>
        3. Resuelva el Warning: Each child in a list should have a unique "key" prop.
        </p>
        <hr />
      <Blog />
    </div>
  );
}
