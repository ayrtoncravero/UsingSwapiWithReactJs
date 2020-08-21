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

  /*async componentDidMount() {
    try{
      const planetOne = await (await axios.get('https://swapi.dev/api/planets/1/')).data;
      const newPlanet = new Planet(planetOne.name, planetOne.terrain, planetOne.rotation_period > 24);
      this.addNewPlanetToCollection(newPlanet);
    }
    catch(e){
      console.log('Error al descargar el planeta: ' + e);
    }
  };*/

  async fetchPlanetById(id) {
    const fetchedPlanet = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    const { name, terrain, rotation_period } = fetchedPlanet.data;
    return new Planet(name, terrain, rotation_period > 24);
  };

  handlePlanetFetch = async (planetId) => {
    try {
      const newPlanet = await this.fetchPlanetById(planetId);
      const { planetCollection } = this.state;
      planetCollection.push(newPlanet);
      this.setState({ planetCollection });
    }
    catch (e) {
      alert('Error al descargar el planeta: ' + e);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MainHeader />
          <div className="row">
            <UserInput onFetchPlanet={this.handlePlanetFetch} />
            <PlanetTable planetCollection={this.state.planetCollection} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
