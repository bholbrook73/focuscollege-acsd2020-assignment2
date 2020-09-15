import calcInnerWallWidth from './calcInnerWallWidth';
import accountForWaste from './accountForWaste';
//This function will find out how many posts in the building
export default function postsInBuilding(houseWidthInFeet:number, houseLengthInFeet:number){

    let postsInWallWidth = 0; 
    let postsInWallLength = 0;
    //Building will have at least 4 posts regardless of size
    let totalPosts:number = 4;


//IF the width is greater than 20' then execute the code inside
    if(houseWidthInFeet >= 20)
    {
        postsInWallWidth = Math.floor((houseWidthInFeet / 20) * 2);
    } 
//IF the length is greater than 20' then execute the code inside
    if(houseLengthInFeet >= 20){
        postsInWallLength = Math.floor((houseLengthInFeet / 20) * 2);
    }

//totalPosts BEFORE waste is accounted for
    totalPosts += postsInWallWidth + postsInWallLength;

//Accouts for the waste here
totalPosts = accountForWaste(totalPosts);
    return totalPosts;
}