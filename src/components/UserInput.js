import React from 'react';

class UserInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.inputId = React.createRef();
    };

    onFetchPlanet = () => {
        this.props.onFetchPlanet(this.inputId.current.value);
        this.resetInputs();
    };

    resetInputs = () => {
        this.inputId.current.value = "";
    };

    render() {
        return (
            <div className="six colum">
                <div className="row">
                    <div className="four colums">
                        <label>Id</label>
                        <input className="u-full-width" placeholder="Ingrese id" ref={this.inputId} type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve colums">
                        <button onClick={this.onFetchPlanet} className="button-primary u-full-width" id="buttonAddBook">Buscar id</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInput;