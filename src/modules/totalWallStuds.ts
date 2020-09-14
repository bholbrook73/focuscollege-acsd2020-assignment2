//import modules needed for totalWallStuds

import buildHouse from './buildHouse';
import accountForWaste from './accountForWaste';

let post = 3.5;

function totalWallStuds( houseWidthInFeet:number, houseLengthInFeet:number ){

    let totalStuds = buildHouse( houseWidthInFeet, houseLengthInFeet );
    let studsPlusWaste = accountForWaste( totalStuds );

    return {
        totalStuds: totalStuds,
        studsPlusWaste: studsPlusWaste
    };

}

export default totalWallStuds;