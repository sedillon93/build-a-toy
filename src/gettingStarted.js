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
  }

  render() {
    return (
      <div>
        <label for="animalSelect">What animal would you like to build today?</label>
        <select id="animalSelect" required="true" onChange={() => this.setAnimal(document.getElementById("animalSelect").value)}>
          <option value="">Choose an animal</option>
          <option value="bear">bear</option>
          <option value="bunny">bunny</option>
          <option value="cat">cat</option>
          <option value="owl">owl</option>
        </select>
      </div>
    )
  }
}

export default GetStarted