//import modules needed for totalWallStuds

import buildHouse from './buildHouse';
import accountForWaste from './accountForWaste';

export default function totalWallStuds( houseWidthInFeet:number, houseLengthInFeet:number ){

    let totalStuds = buildHouse( houseWidthInFeet, houseLengthInFeet );
    let studsPlusWaste = accountForWaste( totalStuds );
    //Because of Scope Block, 4x4's will account for waste in their own function
    return studsPlusWaste;

}