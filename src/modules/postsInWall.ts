import calcInnerWallWidth from './calcInnerWallWidth';

export default function postsInWall(houseWidthInFeet:number, houseLengthInFeet:number){

    var postsInWallWidth; 
    var postsInWallLength;
    
    if(houseWidthInFeet >= 20){
        postsInWallWidth = (houseWidthInFeet / 20) * 2;
    } else{
        postsInWallWidth = 2;
    }

    if(houseLengthInFeet >= 20){
        postsInWallLength = (houseLengthInFeet / 20) * 2
    } else{
        postsInWallLength = 2;
    }

    let totalPosts:number =postsInWallWidth + postsInWallLength;

    return totalPosts;
}