// Import buildHouse from House to use it here
import buildHouse from './House';

// Import calcWall from Wall to use it here
import calcWast from './Waste';

//calculate total beams(4x4) and total studs(2x4) required for a house  and wast
export default function  calcWoodNeeded (houseWidthInFeet: number, houseLengthInFeet: number) {

    //calculate studs(2x4) and wast
    let totalStuds = buildHouse(houseWidthInFeet,houseLengthInFeet).studs;
    let wastStuds = calcWast( totalStuds );

   //calculate beams(4x4) and wast
    let totalbeams = buildHouse(houseWidthInFeet,houseLengthInFeet).beams;
    let wastBeams = calcWast( totalbeams);
    
    return {
        totalStuds : totalStuds,
        wastStuds  : wastStuds,

        totalbeams : totalbeams,
        wastBeams  : wastBeams
    };
}