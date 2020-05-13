import React, {Component} from 'react';
import TechItem from './TechItem';


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

  handleDelete = (pais) =>{
    this.setState({
      paises: this.state.paises.filter(t => t != pais)
    });
  }

  render()
  {

    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.paises.map(pais => <TechItem key={pais}  pais={pais} onDelete={() => this.handleDelete(pais)}/>)}
          <TechItem />
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