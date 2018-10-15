import React from 'react';

class HomePage extends React.Component{
  render() {
    <div>
      <label for="animalSelect">What animal would you like to build today?</label>
      <select id="animalSelect" required="true">
        <option value="">Choose an animal</option>
        <option value="bear">bear</option>
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="bird">bird</option>
      </select>
    </div>
  }
}