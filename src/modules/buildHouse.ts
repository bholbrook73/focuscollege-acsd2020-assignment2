

//Import modules for Build House Function
import buildWall from './buildWall';

// get the number of studs in an entire house
export default function buildHouse( widthInFeet:number, lengthInFeet:number ){

    let wall1 = buildWall( widthInFeet ) * 2;
    let wall2 = buildWall( lengthInFeet ) * 2;
    return wall1 + wall2;

}