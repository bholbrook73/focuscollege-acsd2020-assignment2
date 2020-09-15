

//Import modules for Build House Function
import buildWall from './buildWall';

// get the number of studs in an entire house
export default function buildHouse( widthInFeet:number, lengthInFeet:number ){
    let studsInWall1 = buildWall( widthInFeet ) * 2;
    console.log(studsInWall1, "Wall1");
    let studsInWall2 = buildWall( lengthInFeet ) * 2;
    console.log(studsInWall2, 'wall2');
    return studsInWall1 + studsInWall2;

}