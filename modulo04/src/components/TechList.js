import React, {Component} from 'react';



class TechList extends Component {
  state = {
    paises: [
      'Brasil',
      'Espanha',
      'Italia',
      'França'
    ]
  };
  
  render()
  {
    console.log(this.state);
    return (
      <ul>
        <li>Brasil</li>
        <li>Espanha</li>
        <li>Italia</li>
      </ul>
    );
  }
}

export default TechList;