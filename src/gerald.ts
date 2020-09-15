// wood Dimensions
const twoByFourWidthInInches = 3.5;
const twoByFourLengthInInches = 1.5;
const postWidthInInches = 3.5;

// Gerald's numbers
let maxBoardLength = 8;
let distanceBetweenStudsInInches = 16;

// this funct. takes a number of feet of the length of a wall and
// returns the number of inches inside the posts
function calcInnerWallWidth(outerWallWidthInFeet:number){
    return (outerWallWidthInFeet * 12) - (postWidthInInches * 2);
}

// Gerald wants 10% waste mark up on totalStuds
function accountForWaste(perfectNumberOfStuds:number){
    return Math.ceil(perfectNumberOfStuds * 1.1);
}

// this calculates the number of studs required for a length of a wall
function studsInLength(lengthInInches:number, distanceApartInInches:number){
    return Math.ceil(lengthInInches/distanceApartInInches);
}

function calcStudsOnTopAndBottom(lenghtInInches:number){
    let maxBoardLengthInInches = maxBoardLength*12;
    return Math.ceil(lenghtInInches/maxBoardLengthInInches)*2;
}

// gets the number of studs in an entire wall
function buildWall(outerLengthInFeet:number){
    let length = calcInnerWallWidth(outerLengthInFeet);
    let studsInsideWall = studsInLength(length, distanceBetweenStudsInInches);
    let studsOnTopAndBottom = calcStudsOnTopAndBottom(length);
    let studs = studsInLength(length, distanceBetweenStudsInInches);
    let totalStuds = studsInsideWall + studsOnTopAndBottom +1;
    return totalStuds;
}

// get the number of studs in an entire house
function buildHouse(widthInFeet:number, lengthInFeet:number){
    let wall1 = buildWall(widthInFeet) * 2;
    let wall2 = buildWall(lengthInFeet) * 2;
    return wall1 + wall2;
}

export function calcWallStuds(widthInFeet:number, lengthInFeet:number){
    let totalStuds = buildHouse(widthInFeet, lengthInFeet);
    let studsPlusWaste = accountForWaste(totalStuds);
    return {
        totalStuds: totalStuds,
        studsPlusWaste: studsPlusWaste
    };
}

export default calcWallStuds;