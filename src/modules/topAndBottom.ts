
const maxBoardLengthInFeet = 8;

export default function calcStudsOnTopAndBottom( lengthInInches:number ){
    
    let maxBoardLengthInInches = maxBoardLengthInFeet * 12;
    return Math.ceil( lengthInInches / maxBoardLengthInInches ) * 2;

}
