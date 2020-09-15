// Import calcWall from Wall to use it here
import calcWall from './Wall';

//calculat total beams(4x4) and total studs(2x4) required for a house
export default function buildHouse(widthInFeet: number, lengthInFeet: number){

    //calculate total Beams(4x4) required 
    let beams =  calcWall(widthInFeet).beams;
        beams =  beams + ( calcWall(lengthInFeet).beams );

    //calculate total studs(2x4) required     
    let studs = 2 * calcWall(widthInFeet).studs;
        studs = studs + (2 * calcWall(lengthInFeet).studs);

    return  {
        studs : studs,
        beams : beams
    };
}
