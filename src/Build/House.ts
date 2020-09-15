// Import calcWall from Wall to use it here
import calcWall from './Wall';

//calculat total beams(4x4) and total studs(2x4) required for a house
export default function buildHouse(widthInFeet: number, lengthInFeet: number){

    //calculat total Beams(4x4) required 
    let beams =  calcWall(widthInFeet).beams;
    //4 beams in the corners 
        beams =  beams + ( calcWall(lengthInFeet).beams );

    //calculat total studs(2x4) required     
    let studs = 2 * calcWall(widthInFeet).studs;
        studs = studs + (2 * calcWall(lengthInFeet).studs);

    return  {
        studs : studs,
        beams : beams
    };
}
