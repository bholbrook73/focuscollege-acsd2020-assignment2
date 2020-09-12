import calcInnerWallWidth from './calcInnerWallWidth';
import calcStudsOnTopAndBottom from './topAndBottom';
import studsInLength from './StudsInLength';


const distanceBetweenStudsInInches = 16;


// gets the number of studs in an entire wall
export default function buildWall( outerLengthInFeet:number ){

    let length = calcInnerWallWidth( outerLengthInFeet );
    let studsInsideWall = studsInLength( length, distanceBetweenStudsInInches );
    let studsOnTopAndBottom = calcStudsOnTopAndBottom( length );
    let totalStuds = studsInsideWall + studsOnTopAndBottom + 1;
    return totalStuds;

}