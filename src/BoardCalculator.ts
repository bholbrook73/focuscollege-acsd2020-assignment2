//Sizes of wood in inches.
const postSize = 3.5;
const twoByFourLength = 96; //Eight feet in inches.

//Gerald's numbers
const distanceBetweenBoards = 16;

//How many boards are needed on floor and roof?
function CalculateFloorAndRoofBoards(outerWallWidthInFeet:number)
{
    return ((outerWallWidthInFeet * 12)/twoByFourLength) * 2;
}

//Figure out how many additional posts are needed.
function CalculateExtraPostsNeeded(outerWallWidthInFeet:number)
{
    return Math.floor(outerWallWidthInFeet/20.583);  //Round down to get one extra post per 20 feet and 7 inches(two posts) to account for the post size.
}

//Calculate the inner wall size.
function CalculateInnerWallSize(outerWallWidthInFeet:number)
{
    let extraPosts = CalculateExtraPostsNeeded(outerWallWidthInFeet);
    //Take out the space occupied by the posts. extraPosts will be 2 * 0 if no extra posts are required in a wall.
    return ((outerWallWidthInFeet * 12) - ((2 * postSize) + (2 * extraPosts)))
} 

//Calculate boards needed inside wall.
function CalculateBoardsInsideWall(outerWallWidthInFeet:number)
{
    let distanceInsideWall = CalculateInnerWallSize(outerWallWidthInFeet);
    let boardsInsideWall = distanceInsideWall/distanceBetweenBoards;
    return boardsInsideWall;
}

//Add boards in wall and roof and ceiling together
function CalcTotalBoards(longWallWidthInFeet:number, wideWallWidthInFeet:number)
{
    //Multiply by two to account for two long walls, two wide walls.
   let longWallBoards = Math.ceil((CalculateBoardsInsideWall(longWallWidthInFeet) + CalculateFloorAndRoofBoards(longWallWidthInFeet))) * 2;
   console.log("Long wall boards: " + longWallBoards)
   let wideWallBoards = Math.ceil((CalculateBoardsInsideWall(wideWallWidthInFeet) + CalculateFloorAndRoofBoards(wideWallWidthInFeet))) * 2;
   console.log("Wide wall boards: " + wideWallBoards);
   let extraLongPosts = Math.ceil(CalculateExtraPostsNeeded(longWallWidthInFeet)) * 2;
   console.log("Additional long wall posts: " + extraLongPosts);
   let extraWidePosts = Math.ceil(CalculateExtraPostsNeeded(wideWallWidthInFeet)) * 2;
   console.log("Additional wide wall posts: " + extraWidePosts);
   let totalPosts = extraLongPosts + extraWidePosts;
   //Two extra boards are needed for each extra post, as Gerald only places posts at the end of a full board
   //meaning he needs to only make two additional cuts. Does not deal with the possible corner case
   //of a multiple of eight feet on both sides of a post (would require a minimum gap of 24 feet and 3.5 inches?)
   //In that case, he would not need to make a cut.
   let totalBoards = longWallBoards + wideWallBoards + (totalPosts * 2);
   return {
       totalBoards: totalBoards, 
       totalPosts: totalPosts
    };
}

//Add 10% rounded up to account for waste.
function AccountForWaste(totalBoards:number)
{
    return Math.ceil(totalBoards * 1.1);
}

//Add everything together and export to allow for import in index.js
export default function BuildHouse(longWallWidthInFeet:number, wideWallWidthInFeet:number)
{
    let boardsAndPosts = CalcTotalBoards(longWallWidthInFeet, wideWallWidthInFeet);
    let totalBoardsPlusWaste = AccountForWaste(boardsAndPosts.totalBoards);
    let totalPostsPlusWaste = AccountForWaste(boardsAndPosts.totalPosts);
    console.log("Total boards to purchase after accounting for waste: " + totalBoardsPlusWaste);
    //+4 accounts for the four posts that start in every house.
    console.log("Total posts to purchase after accounting for waste: " + (Number(totalPostsPlusWaste) + 4));
}