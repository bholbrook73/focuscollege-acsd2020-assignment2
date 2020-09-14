// Purpose of this is .TS is to calculate total beams

// Multiplies feet into inches 
function feettoinches (Wallfeet:number) {
    let lengthmultiplied = Wallfeet * 12;
    return lengthmultiplied
}


//Could also be accomplished in feet 
//Calculates the amount of posts for every 20 feet without innerwall deductions
function TwoWalls (Wall12:number){
    let Wallinches = feettoinches(Wall12 / 2)
        if ((Wallinches >=0) && (Wallinches <=239)) // 0 to 19.9 feet in inches
            return 0 
        
        else if ((Wallinches >=240) && (Wallinches <=479)) // 20 to 39.9 feet in inches
            return 2 
            
        else if ((Wallinches >=480) && (Wallinches <=719)) // 40 to 59.9 feet in inches
            return 4
        // A wall longer than this will be very weak
        
        else ((Wallinches >=720) && (Wallinches <=959)) // 60 to 79.9 feet
            return 6
}

function Percentten (onepointone:number){
    let percent = onepointone * 1.10 
    return percent
}

// User inputs are taken in and the function calculates the final amount of posts
// Adds WidthWalls (both sides) and lengthwalls (both sides) together
// Exports to index.ts in this application
export function Totalbeams (width:number, length:number){
    let Widthwalls = TwoWalls (width * 2)
    let Lengthwalls = TwoWalls (length * 2) 
    return  Math.ceil (Percentten (Widthwalls + Lengthwalls)) + 4
}

