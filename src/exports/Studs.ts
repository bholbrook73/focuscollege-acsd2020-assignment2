// In process of rebuilding structure
// Ran out of time!
// I'll finish it !

const twobyfouradd = 1.5 * 2
const fourbyfouradd = 3.5 * 2
const oneboardinches = 96
const Studspacing = 16
const sideboards = 2
const twowalls = 2

// Walltoinches takes the width or the length and multiplies by 12 to convert to inches
// Each wall has two beams and 2 boards(Geralds request, will be removed)
function Walltoinches (wallinfeet:number){
    let deductions = wallinfeet * 12
        if ((deductions >=0) && (deductions <=239)) //0 to 19.9 feet ( in inches)
        return deductions - 10
    
        else if ((deductions >=240) && (deductions <=479)) // 20 to 39.9 feet
        twentyforty
        
        else if ((deductions >=480) && (deductions <=719)) // 40 to 59.9 feet
        fortysixty

        else ((deductions >=720) && (deductions <=959)) // 60 to 79.9 feet
        return deductions - 20.5
}   

// Work in progress ( lines 27 to 57 )
//  20-39.9 foot walls
// is not being called currently..  (31 to 57)
function twentyforty(number:number){
    let longside = number % 66 - 6.5 // or one 4x4 and two 2x4s
        let longstuds = longside 
        console.log (longstuds)
    let shortside = number % 33 - 10 // or two 4x4 and two 2x4s
        let shortstuds = shortside 
    return (longstuds + shortstuds) + sideboards
}
//Buildonewall
function buildwalls (number:number){
    let length = Walltoinches(number)
    let studs = twentyforty(length) 
    let TB = boardsBottomTop(length) 
    return (studs + TB) * twowalls
}

function Studwalls (lengthininches:number){
    let numberofstuds = Math.floor (lengthininches / Studspacing )
    return numberofstuds
}

function Housebuil (length:number, width:number ){
    let twowidthwalls = buildwalls(length) 
    let twolengthwalls = buildwalls(width)
    return twolengthwalls + twowidthwalls
}

//40-59.9
function fortysixty(number:number){
    let side1 = number % 33 - 6.5 // 
        let sideone = side1 / Studspacing
    let side2 = number % 33 - 6.5 // 
        let sidetwo = (side2 / 16)
    let side3 = number % 33 - 6.5 // 
        let sidethree = (side3 / 16)
    return (sideone + sidetwo + sidethree) + (sideboards * 2)
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
    let numberofstuds = Math.floor (lengthininches / 16)
    return numberofstuds
}

//Builds the walls
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches(calls the Walltoinches function)
    let onewallstuds = WallStuds (oneWallinches) // Takes the wall length in inches and divides by 16 ( rounded down ))
    let onewallTBS = boardsBottomTop(oneWallinches) + sideboards // Calculates amount of boards for top and bottom and adds two for side boards
    let twowalltotal = (onewallstuds + onewallTBS) * twowalls 
return twowalltotal
}

// Builds the house..
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) 
    let twolengthwalls = Wallsbuilt(width)
    return twolengthwalls + twowidthwalls
}