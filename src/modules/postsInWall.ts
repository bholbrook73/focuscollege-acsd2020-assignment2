import calcInnerWallWidth from './calcInnerWallWidth';

export default function postsInWall(houseWidthInFeet:number, houseLengthInFeet:number){

    var postsInWallWidth = 0; 
    var postsInWallLength = 0;
    let totalPosts:number = 4;

    if(houseWidthInFeet >= 20)
    {
        postsInWallWidth = Math.ceil((houseWidthInFeet / 20) * 2);
    } 

    if(houseLengthInFeet >= 20){
        postsInWallLength = Math.ceil((houseLengthInFeet / 20) * 2);
    }

    totalPosts += postsInWallWidth + postsInWallLength;
    return totalPosts;
}