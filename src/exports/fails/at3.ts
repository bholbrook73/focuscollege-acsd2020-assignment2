const twowalls = 2
const fourbyfouradd = 3.5 
const oneboardinches = 96
const Studspacing = 16

// This entire typescript file is ONLY for total studs
// Each wall has two beams and 2 boards at the ends

//Converts feet into inches 
// Every 20 feet a post is added so 3.5 inches needs to be subtracted per post
export function Walltoinches (wallinfeet:number){
    let deductions = wallinfeet * 12
        if ((deductions >=0) && (deductions <=239)) //0 to 19.9 feet ( in inches)
        return deductions - 10

        else if ((deductions >=240) && (deductions <=479)) // 20 to 39.9 feet
        return deductions - 29.5

        else if ((deductions >=480) && (deductions <=719)) // 40 to 59.9 feet
        return deductions - 17
        
        // A wall longer than this will be very weak

        else ((deductions >=720) && (deductions <=959)) // 60 to 79.9 feet
        return deductions - 20.5
}        
// if wall above 20

// Calculate the top and bottom boards
// To be used when total length is input
function boardsBottomTop (Bottomandtop:number){
    let totalboards = Math.ceil (Bottomandtop / oneboardinches * 2);
    return totalboards
}

// Calculates the amount of studs per wall
// Length divided by 16 when called
function WallStuds (lengthininches:number){
    let numberofstuds = Math.floor (lengthininches / Studspacing)
    return numberofstuds
}

//function to be used in wall built that adds two 2x4s per beam
//The beams width is already subtracted by Walltoinches
function additional2by4 (number:number){
    let studs = number
        if ((studs >=0) && (studs <=229)) //0 to 19.9 feet ( in inches)
        return 2

        else if ((studs >=230) && (studs <=469)) // 20 to 39.9 feet
        return 4

        else if ((studs >=470) && (studs <=709)) // 40 to 59.9 feet
        return 6

        else ((studs >=710) && (studs <=949)) // 60 to 79.9 feet
        return 8
}

//Builds the house
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches 
    let onewallstuds = Math.floor (WallStuds (oneWallinches)) // Takes the wall length in inches and divides by 16 ( rounded down )
    let onewallTB = boardsBottomTop(oneWallinches) // Adds amount of boards for top and bottom 
    let TBS = additional2by4(oneWallinches) + onewallTB
    let onewalltotal = (onewallstuds + TBS)   // Adds studs in a wall + top and bottom boards times 2 for two walls
return onewalltotal

} 
// Builds the house
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) * twowalls
    let twolengthwalls = Wallsbuilt(width) * twowalls
    let Studswithwaste = (twolengthwalls + twowidthwalls)
    return Studswithwaste
}
