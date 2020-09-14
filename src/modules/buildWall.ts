import calcInnerWallWidth from './calcInnerWallWidth';
import calcStudsOnTopAndBottom from './topAndBottom';
import studsInLength from './StudsInLength';


const distanceBetweenStudsInInches = 16;

// gets the number of studs in an entire wall
export default function buildWall( outerLengthInFeet:number ){

    let length = calcInnerWallWidth( outerLengthInFeet ); //This number gives the width INCLUDING posts if there are any
    let studsInsideWall = studsInLength( length, distanceBetweenStudsInInches );
    let studsOnTopAndBottom = calcStudsOnTopAndBottom( length );
    let totalStuds = studsInsideWall + studsOnTopAndBottom;  // HAD PLUS ONE HERE
    let totalPosts = Math.floor(outerLengthInFeet / 20); 
    return totalStuds;
   
}
