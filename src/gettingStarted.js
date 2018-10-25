import React from 'react';

class GetStarted extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      animal : ""
    };

    this.setAnimal = this.setAnimal.bind(this);
  }

  setAnimal(animal){
    this.setState({
      animal: animal
    });
    let image = document.getElementById("animalImage");
    switch (animal){
      case 'bear':
        image.src = 'src/images/panda.png';
        break;
      case 'bunny':
        image.src = 'src/images/bunny.png';
        break;
      case 'cat':
        image.src = 'src/images/cat.png';
        break;
      case 'owl':
        image.src = 'src/images/owl.png';
        break;
      default:
        image.src = '';
        break;
    }
  }

  render() {
    return (
      <div>
        <label for="animalSelection">What animal would you like to build today?</label>
        <select id="animalSelection" required="true" onChange={() => this.setAnimal(document.getElementById("animalSelection").value)}>
          <option value="">Choose an animal</option>
          <option value="bear">bear</option>
          <option value="bunny">bunny</option>
          <option value="cat">cat</option>
          <option value="owl">owl</option>
        </select>
        <img id="animalImage" src=""/>
      </div>
    )
  }
}

export default GetStarted