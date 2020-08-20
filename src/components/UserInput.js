import React from 'react';
import Planet from '../entities/Planet';

class UserInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputTerrain = React.createRef();
        this.inputdayLongerAsEarth = React.createRef();
    }

    onNewPlanet = () => {
        const newPlanet = new Planet(
            this.inputName.current.value,
            this.inputTerrain.current.value,
            this.inputdayLongerAsEarth.current.checked,
        );
        this.props.onAddNewPlanet(newPlanet);
        this.resetInputs();
    };

    resetInputs = () => {
        this.inputName.current.value = "";
        this.inputTerrain.current.value = "";
        this.inputdayLongerAsEarth.current.checked = true;
    };

    render() {
        return (
            <div ClassName="six colum">
                <div ClassName="row">
                    <div ClassName="four colums">
                        <label>Nombre</label>
                        <input ClassName="u-full-width" placeholder="Ingrese nombre" ref={this.inputName} type="text"></input>
                    </div>
                    <div ClassName="four colums">
                        <label>Terreno</label>
                        <input ClassName="u-full-width" placeholder="Ingrese autor" ref={this.inputTerrain} type="text"></input>
                    </div>
                    <div ClassName="four colums">
                        <label>Dia mayor</label>
                        <input ClassName="u-full-width" ref={this.inputdayLongerAsEarth} type="checkbox" defaultChecked></input>
                    </div>
                    <div ClassName="row">
                        <div ClassName="twelve colums">
                            <button onClick={this.onNewPlanet} ClassName="button-primary u-full-width" id="buttonAddBook">Añadir planeta</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInput;