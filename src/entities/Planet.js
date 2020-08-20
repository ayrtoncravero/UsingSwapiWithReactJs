class Planet{
    constructor(name, terrain, dayLongerAsEarth){
        this.name = name;
        this.terrain = terrain;
        this.dayLongerAsEarth = dayLongerAsEarth;
    }
    getName = () => this.name;
    getTerrain = () => this.terrain;
    getdayLongerAsEarth = () => this.dayLongerAsEarth;
}
export default Planet;