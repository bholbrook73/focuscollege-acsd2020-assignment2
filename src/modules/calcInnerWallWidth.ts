// this function takes a number of feet of the length of a wall and 
// returns the number of inches inside the posts

// 4x4 post actual size
const postWidthInInches = 3.5;

export default function calcInnerWallWidth( outerWallWidthInFeet:number ){
    let innerWallWidthInInches:number;
    
    if(outerWallWidthInFeet >= 40){
        //Two or More Beams Required
        innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 4);
        return innerWallWidthInInches;
    
    } else if(outerWallWidthInFeet >= 20 && outerWallWidthInFeet < 40){
         //One Beam Required
        innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 3);
        return innerWallWidthInInches;

    } else {
        //No beams required
        innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 2);
        return innerWallWidthInInches;
    }
}
