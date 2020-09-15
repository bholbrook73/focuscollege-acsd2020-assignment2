// calculat total woods needed for one wall 
// Import convertToInch from My function to use it here
import convertToInch from './My_Function/ConvertToInch';

//Declare constants.
//Wood dimensions
const twoByFourHeightInInches = 1.5;
const FourByFourWidthInInches = 3.5;

const postWidthInInches = 3.5;

//Gerlads numbers
//for studs
const maxBoardLengthInFeet = 8;
const distanceBetweenStudsInInch = 16;

//for beams
const maxLengthToPutBeamInFeet = 20;
const distancebetweenBeamInFeet = 16;

//calculate total wood(4x4 & 2x4) for one wall
// ********************************************

//this function takes  a number of feet of the length of a wall and 
//returns the number of inches inside the posts
function calcInnerWallwidth (outerWallWidthInFeet:number){

    let innerWallWidthInInches  = convertToInch(outerWallWidthInFeet)  - ((postWidthInInches + twoByFourHeightInInches) * 2);
    innerWallWidthInInches = innerWallWidthInInches - ( distanceBetweenStudsInInch - twoByFourHeightInInches);
    return innerWallWidthInInches;
}

//calculate total Beams(4x4) required 
function getBeam (outerLengthInFeet: number){

    let beams =  0;
 
    // less than 20 feet, no extra beams adding
    if(outerLengthInFeet < maxLengthToPutBeamInFeet && (outerLengthInFeet > 0)){

        beams = 2;
    
    // greater than 20 feet, extra beams 
    }else if(outerLengthInFeet > maxLengthToPutBeamInFeet && (outerLengthInFeet > 0)){
            beams = 2 + Math.floor( outerLengthInFeet / maxBoardLengthInFeet);
    
        // other = zero
        }else {
        beams =  0;
    };

return beams;
}

//calculate total Boards required 
function getBoards(outerLengthInFeet: number){

    let boards = 0;
    let boardsAround = 0;
    let boardInBetween = 0;

    // less than 20 feet, 
    if(outerLengthInFeet < maxLengthToPutBeamInFeet && (outerLengthInFeet > 0)){

        let bottomAndTopBeam = 2 * (Math.ceil(outerLengthInFeet/maxBoardLengthInFeet));
        let sideBeams = 2 ;
        boardsAround = 2 + (2 * sideBeams) + bottomAndTopBeam ;

    // greater than 20 feet, extra boards for cornors and in between
    }else if(outerLengthInFeet > maxLengthToPutBeamInFeet && (outerLengthInFeet > 0)){
        
        // x/20 less than 1
        // x * 12 -10 -14.5 /16 in between boards
        // total boards = in between + boards_around
        if(outerLengthInFeet/maxLengthToPutBeamInFeet< 1){

            boardInBetween = calcInnerWallwidth(outerLengthInFeet) / distanceBetweenStudsInInch; 
        
        //x/20 = > 1 
        //inbetweenboard = longPartBoard + shortPartBoard        
        }else if(outerLengthInFeet/maxLengthToPutBeamInFeet< 1) {

            //longPart = x/16 ==> whole number==> *11
            let longPart = Math.floor(outerLengthInFeet/distancebetweenBeamInFeet)
                //return whole number
                longPart = longPart * Math.ceil(calcInnerWallwidth(outerLengthInFeet));
                
            //Shortpart=x/16==> remaining => *16=>*12-5-1.5-14.5/16
            let shortPart  = outerLengthInFeet/distancebetweenBeamInFeet;
                //return the franction of number(Remaining)
                shortPart  = (shortPart - Math.floor(shortPart))*100;
            boardInBetween = shortPart + longPart;
        } 
        //total boards = in between + boards_around
        boards = boardsAround + boardInBetween;

    // other cas zero
    }else {
            boards = 0;
    };

return boards;
}

//calculate total beams(4x4) and total studs required for one wall
export default function calcWall (outerLengthInFeet :number){
    
    let beams     = getBeam(outerLengthInFeet);
   
    let boards    = getBoards(outerLengthInFeet);
    
    let innerWall = calcInnerWallwidth(outerLengthInFeet);

    //Divided by section to calculate the total number of lumer need for a wall
    let studs = innerWall / distanceBetweenStudsInInch;

    //Each wall required one 2x4 on the top, bottom, and sides
    studs = 3 + Math.ceil(outerLengthInFeet/maxBoardLengthInFeet) + studs;

    //final calculation of lumbers
    studs = Math.ceil(studs) + boards;

return {
    studs : studs,
    beams : beams
 } ;
}