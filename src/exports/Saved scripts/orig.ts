const twobyfouradd = 1.5 * 2
const fourbyfouradd = 3.5 * 2
const oneboardinches = 96
const Studspacing = 16

// Walltoinches takes the width or the length and multiplies by 12 to convert to inches
// Each wall has two beams and 2 boards(Geralds request, will be removed)
function Walltoinches (Wallfeet:number) {
    let lengthmultiplied = Wallfeet * 12;
    let deducted10 = lengthmultiplied - 10; // or twobyfouradd * 2
    return deducted10
}

// account for top and bottom
// To be used when total length is input5
function boardsBottomTop (Bottomandtop:number){
    let totalboards = Math.ceil (Bottomandtop / oneboardinches * 2);
    return totalboards
}

// Calculates the amount of studs per wall
// Length divided by 16 when called
function WallStuds (lengthininches:number){
    let numberofstuds = lengthininches / 16 
    return numberofstuds
}

//Builds the house
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches((10 already subtracted)(calls the Walltoinches function))
    let onewallstuds = Math.floor (WallStuds (oneWallinches)) // Takes the wall length in inches and divides by 16 ( rounded down )
    let onewallTBS = boardsBottomTop(oneWallinches) + 2 // Calculates amount of boards for top and bottom and adds two for side boards
    let onewalltotal = (onewallstuds + onewallTBS) * 2 // Adds studs in a wall + top and bottom boards times 2 for two walls
return onewalltotal
}

export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) 
    let twolengthwalls = Wallsbuilt(width)
    return twolengthwalls + twowidthwalls
}