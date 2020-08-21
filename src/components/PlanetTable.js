import React from 'react';
import PlanetTableItem from './PlanetTableItem';

function PlanetTable(props) {
    const { planetCollection } = props;
    return (
        <div className="six colums">
            <table id="tableBooks" className="u-full-width">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Terreno</th>
                        <th>¿Mayor?</th>
                    </tr>
                </thead>
                <tbody>
                    { planetCollection.map((planet, index) => <PlanetTableItem planet={planet} key={index} />) }
                </tbody>
            </table>
        </div>
    );
};

export default PlanetTable;