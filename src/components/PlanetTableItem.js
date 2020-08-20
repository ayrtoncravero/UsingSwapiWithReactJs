import React from 'react';
// import Planet from '../entities/Planet';

function PlanetsTableItem(props){
    const { planet } = props;
    return(
        <tr>
            <td>{planet.getName()}</td>
            <td>{planet.getTerrain()}</td>
            <td>{planet.getdayLongerAsEarth() ? 'Si' : 'No'}</td>
        </tr>
    );
}
export default PlanetsTableItem;