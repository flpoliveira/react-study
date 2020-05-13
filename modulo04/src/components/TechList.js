import React, {Component} from 'react';
import TechItem from './TechItem';


class TechList extends Component {
  state = {
    novoPais: '',
    paises: [
      
    ]
  };
  
  //Executado assim que o componente aparece em tela  
  componentDidMount(){
    const paises = localStorage.getItem('paises');
    if(paises)
    {
      this.setState({ paises: JSON.parse(paises)});
    }

  }
  //Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if(prevState.paises != this.state.paises)
    {
      localStorage.setItem('paises', JSON.stringify(this.state.paises));
    }
  }
  //Quando o componente deixa de existir
  componentWillUnmount() {
    
  }

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