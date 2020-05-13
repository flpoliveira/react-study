import React, {Component} from 'react';



class TechList extends Component {
  state = {
    novoPais: '',
    paises: [
      'Brasil',
      'Espanha',
      'Italia',
      'França'
    ]
  };
  
  handleInputChange = e =>{
    // console.log(e.target.value);
    this.setState({ novoPais: e.target.value});

  }

  handleSubmit = e =>{
    e.preventDefault();
    
    console.log(this.state.novoPais);
    this.setState({ 
      paises: [...this.state.paises, this.state.novoPais],
      novoPais: ''
    });
  
  }

  render()
  {
7
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.paises.map(pais => <li key={pais}>{pais}</li>)}
        </ul>
        <input 
          type='text' 
          onChange={this.handleInputChange}
          value={this.state.novoPais}
        />
        <br/>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;