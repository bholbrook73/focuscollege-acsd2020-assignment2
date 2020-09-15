// calculat total woods needed for one wall 
// Import convertToInch from My function to use it here
import convertToInch from './My_Function/ConvertToInch';

//Declare constants for the calculation.
//Wood dimensions
const twoByFourWidthInInches = 3.5;
const twoByFourHeightInInches = 1.5;
const postWidthInInches = 3.5;

//Gerlads numbers
//for studs
const maxBoardLengthInFeet = 8;
const distanceBetweenStudsInInFeet = 16;

//for beams
let maxLengthToPutBeamInFeet = 20;
let distanceForbetweenBeamInFeet = 16;

//calculat total wood(4x4 & 2x4) for one wall
// ********************************************

//calculat total Studs(2x4) required 
function getTwoByFour (outerLengthInFeet: number){

    let twoByFour = 0;

return twoByFour;
};

//calculat total Beams(4x4) required 
function getFourByFour (outerLengthInFeet: number){

    let fourByFour = 0;

return fourByFour;
};


//calculat total beams(4x4) and total studs required for one wall
export default function calcWall (outerLengthInFeet :number){

    let beams = getFourByFour(outerLengthInFeet);
    let studs = getTwoByFour(outerLengthInFeet);


return {
    studs : studs,
    beams : beams
 } ;
}


