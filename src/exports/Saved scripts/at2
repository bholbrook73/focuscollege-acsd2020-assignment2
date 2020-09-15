const wallends = 2
const fourbyfouradd = 3.5 
const oneboardinches = 96
const Studspacing = 16
const outerwalldeduct = 10

// This entire typescript file is ONLY for total studs
// Each wall has two beams and 2 boards at the ends

//Converts feet into inches 
// Every 20 feet a post is added so 3.5 inches needs to be subtracted per post
 
// Account for additional beams added
// Every beam added needs 2 2x4s added
function Walltoinches (wallinfeet:number){
    let deductions = wallinfeet * 12
        if ((deductions >=0) && (deductions <=239)) //0 to 19.9 feet ( in inches)
        return deductions - 10

        else if ((deductions >=240) && (deductions <=479)) // 20 to 39.9 feet
        return deductions - 13.5

        else if ((deductions >=480) && (deductions <=719)) // 40 to 59.9 feet
        return deductions - 17
        // A wall longer than this will be very weak

        else ((deductions >=720) && (deductions <=959)) // 60 to 79.9 feet
        return deductions - 20.5
}     

// Calculate the top and bottom boards
// To be used when total length is input5
function boardsBottomTop (Bottomandtop:number){
    let totalboards = Math.ceil (Bottomandtop / oneboardinches * 2);
    return totalboards
}

// Calculates the amount of studs per wall
// Length divided by 16 when called
function WallStuds (lengthininches:number){
    let numberofstuds = Math.floor (lengthininches / Studspacing)
    console.log ("function wallstuds", numberofstuds)
    return numberofstuds
}

//function to be used in wall built that adds two 2x4s per beam
//The beams width is already subtracted by Walltoinches
function additional2by4 (number:number){
    let studs = number
        if ((studs >=0) && (studs <=229)) //0 to 19.9 feet ( in inches)
        return 4

        else if ((studs >=230) && (studs <=469)) // 20 to 39.9 feet
        return 6

        else if ((studs >=470) && (studs <=709)) // 40 to 59.9 feet
        return 8

        else ((studs >=710) && (studs <=949)) // 60 to 79.9 feet
        return 10
}

//Builds the house
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches (minus two 4x4s and 2x4s)
    console.log(oneWallinches, "wallinches")
    let onewallstuds = Math.floor (WallStuds (oneWallinches)) // Takes the wall length in inches and divides by 16 ( rounded down )
    console.log(oneWallinches, "wallstuds")
    let onewallTBS = boardsBottomTop(oneWallinches) // Calculates amount of boards for top and bottom
    console.log(oneWallinches, "top and bottom")
    let add2byfours = additional2by4(oneWallinches) // Adds an additional 2 boards for every beam added (2 is already on each end)
    console.log(oneWallinches, "additional 2x4s")
    let twowalltotal = (onewallstuds + onewallTBS) * wallends // Adds studs in a wall + top and bottom boards times 2 for two walls
return twowalltotal + add2byfours
}

// Builds the house
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) 
    let twolengthwalls = Wallsbuilt(width)
    let Studswithwaste = (twolengthwalls + twowidthwalls)
    return Studswithwaste
}
