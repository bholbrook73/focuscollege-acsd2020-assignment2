// Purpose of this is .TS is to calculate total beams
//Every wall has 4 corners regardless of size
const fourcorners = 4

// Could also be accomplished in feet 
//Calculates the amount of posts for every 20 feet without innerwall deductions
function Determinethebeams (Wall12:number) {
    let Wallinches20feet = Wall12 / 240
    let beams =  Math.floor(Wallinches20feet * 12)  
    return beams * 2
}

// User inputs are taken in and the function calculates the final amount of posts
// Adds WidthWalls (both sides) and lengthwalls (both sides) together
// Adds the beams for the corners
// Exports to index.ts in this application
export function Totalbeams (width:number, length:number) {
    let Widthwalls = Determinethebeams(width)
    let Lengthwalls = Determinethebeams (length) 
    return (Widthwalls + Lengthwalls) + fourcorners
}
