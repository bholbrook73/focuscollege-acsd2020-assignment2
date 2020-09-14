
const fourbyfouradd = 3.5 
const oneboardinches = 96
const Studspacing = 16

// This entire typescript file is ONLY for total studs
// Each wall has two beams and 2 boards at the ends

//Converts feet into inches 
// Every 20 feet a post is added so 3.5 inches needs to be subtracted per post
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

// Function to add 10% waste
function TenPercent (onepointone:number){
    let percent = onepointone * 1.10 
    return percent
}

// Calculates the amount of studs per wall
// Length divided by 16 when called
function WallStuds (lengthininches:number){
    let numberofstuds = lengthininches / Studspacing
    return numberofstuds
}

//Builds the house
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches 
    let onewallstuds = Math.floor (WallStuds (oneWallinches)) // Takes the wall length in inches and divides by 16 ( rounded down )
    let onewallTBS = boardsBottomTop(oneWallinches) + 2 // Calculates amount of boards for top and bottom and adds two for side boards
    let twowalltotal = (onewallstuds + onewallTBS) * 2 // Adds studs in a wall + top and bottom boards times 2 for two walls
return twowalltotal
}

// Builds the house
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) 
    let twolengthwalls = Wallsbuilt(width)
    let Studswithwaste = Math.ceil (TenPercent(twolengthwalls + twowidthwalls))
    return Studswithwaste
}
