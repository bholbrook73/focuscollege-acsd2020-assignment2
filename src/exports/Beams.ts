// Purpose of this is .TS is to calculate total beams

//Every wall has 4 corners regardless of size
const fourcorners = 4

// Multiplies feet into inches 
function feettoinches (Wallfeet:number) {
    let lengthmultiplied = Wallfeet * 12;
    return lengthmultiplied
}

// Could also be accomplished in feet 
//Calculates the amount of posts for every 20 feet without innerwall deductions
function TwoWalls (Wall12:number){
    let Wallinches = feettoinches(Wall12 / 2)
        if (Wallinches < 239) // 0 to 19.9 feet in inches
            return 0
        
        else Wallinches >= 240  // 20 to 39.9 feet in inches
            return 2       
}

// User inputs are taken in and the function calculates the final amount of posts
// Adds WidthWalls (both sides) and lengthwalls (both sides) together
// Adds the beams for the corners
// Exports to index.ts in this application
export function Totalbeams (width:number, length:number){
    let Widthwalls = TwoWalls (width * 2)
    let Lengthwalls = TwoWalls (length * 2) 
    return  Math.ceil (Widthwalls + Lengthwalls) + fourcorners
}

