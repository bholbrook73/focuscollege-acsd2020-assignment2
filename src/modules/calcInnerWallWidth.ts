// this function takes a number of feet of the length of a wall and 
// returns the number of inches inside the posts

// 4x4 post actual size
const postWidthInInches = 3.5;

export default function calcInnerWallWidth( outerWallWidthInFeet:number ){
    let innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 2);
    return innerWallWidthInInches;

}
