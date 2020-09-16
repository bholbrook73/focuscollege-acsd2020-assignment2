const oneboardinches = 96
const Studspacing = 16
const sideboards = 2
const twowalls = 2

// Walltoinches takes the width or the length and multiplies by 12 to convert to inches
// Each wall has two beams and 2 boards(Geralds request, will be removed)
function Walltoinches (wallinfeet:number){
    let Wallinches = wallinfeet * 12
    return Wallinches
}   

// Calculates the amount of studs per wall
// Length divided by 16 when called
function WallStuds (lengthininches:number) {

    // If the wall is below 20 feet it does a simple calculation
    // Length - 10 (lumber deductions) and divides by 16
    if (lengthininches < 240){
        let Studsinthewall = Math.floor ((lengthininches - 10) / 16)
    return Studsinthewall 
    }

    // In a simple explanation the following condition divides by 96
    // splits the interger and decimal to build the individual sections
    else (lengthininches >= 240)
        let split = ((lengthininches - 3.5) / oneboardinches)
            let longside = Math.floor(split) * oneboardinches -7
                let longstuds = Math.floor (longside / Studspacing) 
            let shortside = split - Math.floor(split)
                let shortstuds = Math.floor(((shortside * oneboardinches) - 10) / Studspacing) 
        let studstotal = longstuds + shortstuds
    return studstotal + sideboards
      
}

// Function that will take the total length and divide by 96
// Multiplied by 2 for top and bottom.
function boardsBottomTop (Bottomandtop:number){
    let totalboards = Math.ceil (Bottomandtop / oneboardinches * 2);
    return totalboards
}
// Calls the Walltoinches function to build the wall
// Using the walls in inches it makes the indidivual calulcations for each:
// Amount of studs required
// Bottom and top
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) 
    let onewallTBS = boardsBottomTop(oneWallinches) 
    let studs = WallStuds(oneWallinches)  
    let onewalltotal =  (studs + onewallTBS) 
return onewalltotal + sideboards
}

// Builds the house..
// Lengthwall x2, Widthwall x2
// Adds them together
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) * twowalls
    let twolengthwalls = Wallsbuilt(width) * twowalls
    return twolengthwalls + twowidthwalls
}