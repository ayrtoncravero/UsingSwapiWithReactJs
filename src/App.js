import React from 'react';
import PlanetTable from './components/PlanetTable';
import UserInput from './components/UserInput';
import MainHeader from './components/MainHeader';
import Planet from './entities/Planet';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetCollection: [],
    };
  }

  async componentDidMount() {
    try{
      const planetOne = await (await axios.get('https://swapi.dev/api/planets/1/')).data;
      const newPlanet = new Planet(planetOne.name, planetOne.terrain, planetOne.rotation_period > 24);
      this.addNewPlanetToCollection(newPlanet);
    }
    catch(e){
      console.log('Error al descargar el planeta: ' + e);
    }
  };

  async fetchPlanetById(id) {
    try{
      const fetchPlanet = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      const { name, terrain, rotation_period } = fetchPlanet.data;
      const newPlanet = new Planet(name, terrain, planetOne > 24);
      return newPlanet;
    }
    catch(e){
      alert('Error al descargar el planeta solicitado: ' + e);
    }
  }

  addNewPlanetToCollection = (newPlanet) => {
    const { planetCollection } = this.state;
    planetCollection.push(newPlanet);
    this.setState({ planetCollection });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MainHeader />
          <div className="row">
            <UserInput onAddNewPlanet={this.addNewPlanetToCollection} />
            <PlanetTable planetCollection={this.state.planetCollection} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
