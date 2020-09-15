// calculat total woods needed for one wall 
// Import convertToInch from My function to use it here
import convertToInch from './My_Function/ConvertToInch';

//Declare constants for the calculation.
//Wood dimensions
const twoByFourHeightInInches = 1.5;
const FourByFourWidthInInches = 3.5;

const postWidthInInches = 3.5;

//Gerlads numbers
//for studs
const maxBoardLengthInFeet = 8;
const distanceBetweenStudsInInch = 16;

//for beams
let maxLengthToPutBeamInFeet = 20;
let distanceForbetweenBeamInFeet = 16;

//calculat total wood(4x4 & 2x4) for one wall
// ********************************************

//this function takes  a number of feet of the length of a wall and 
//returns the number of inches inside the posts
function calcInnerWallwidth (outerWallWidthInFeet:number){

    let innerWallWidthInInches  = convertToInch(outerWallWidthInFeet)  - (postWidthInInches -twoByFourHeightInInches) * 2;
    return innerWallWidthInInches;
}

// //this calculates the number of studs required for a length of the wall
// function studsInLength (lengthInInches:number, distanceApartInches:number){

//     return Math.ceil(lengthInInches / distanceApartInches);
// }

// function calcStudsInTopAndBottom(lengthInInches:number){

//     let maxBoardLengthInInches = convertToInch(maxBoardLengthInFeet);

// return Math.ceil(lengthInInches / maxBoardLengthInInches) * 2;
// }

//calculat total Beams(4x4) required 
function getFourByFour (outerLengthInFeet: number){

    let fourByFour = 0;
    let lengthInInches = calcInnerWallwidth(outerLengthInFeet);

    // greater than 20 feet to add extra beams or no adding, beam = 0
    if (outerLengthInFeet > maxLengthToPutBeamInFeet){ 
        fourByFour  = Math.ceil( lengthInInches / convertToInch(distanceForbetweenBeamInFeet ));    
    } 

return fourByFour;
}

//calculat total beams(4x4) and total studs required for one wall
export default function calcWall (outerLengthInFeet :number){
    
    let beams = getFourByFour(outerLengthInFeet);
    
    // convert to inches
    let wall = calcInnerWallwidth(outerLengthInFeet);

    //substract 16” sections + wedith of lumber     
    wall = wall - ( distanceBetweenStudsInInch - FourByFourWidthInInches);
    
    //Divided by section to calculate the total number of lumer need for a wall
    wall = wall / distanceBetweenStudsInInch;

    //Each wall required one 2x4 on the top, bottom, and sides
    wall = 3 + Math.ceil(outerLengthInFeet/maxBoardLengthInFeet) + wall;

    //Round up a decimal in the final calculation of lumbers
    let studs = Math.ceil(wall);
       

return {
    studs : studs,
    beams : beams
 } ;
}


 // if(beams < 0){
    //     console.log("1");
    // }else {
    //     console.log("other")
    // }

    //calculat total Studs(2x4) required 
// function getTwoByFour (outerLengthInFeet: number){

    // let twoByFour = 0;
    // let fourByFour = getFourByFour(outerLengthInFeet);
    // let lengthInInches = convertToInch(outerLengthInFeet);

    // let beamTotalLengthInInches = fourByFour * postWidthInInches;
     
    // lengthInInches = lengthInInches - beamTotalLengthInInches;
            
    // let studsInsideWall = studsInLength(lengthInInches,convertToInch(distanceBetweenStudsInInFeet));

    // let studsOnTopAndBottom = calcStudsInTopAndBottom(lengthInInches);
    
    // twoByFour = studsInsideWall + studsOnTopAndBottom 

// return twoByFour;
// }



// let beams = getFourByFour(outerLengthInFeet);

//     let lengthInInches = convertToInch(outerLengthInFeet);

//     let beamTotalLengthInInches = 0; //beams * postWidthInInches;
     
//     lengthInInches = lengthInInches // - beamTotalLengthInInches;
            
//     let studsInsideWall = studsInLength(lengthInInches,convertToInch(distanceBetweenStudsInInFeet));

//     let studsOnTopAndBottom = calcStudsInTopAndBottom(lengthInInches);
    
//     let studs = studsInsideWall + studsOnTopAndBottom 

