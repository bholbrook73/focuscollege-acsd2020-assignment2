import yargs = require('yargs');
import { Housebuilt } from "./exports/Studs"
import { Totalbeams } from "./exports/Beams"

// Using Yargs to pass arguments from CLI

yargs.command(
    'calc-wood-needed',
    'Calculate the number of studs required to stick frame a house for Gerald',
    {
        width: {
            type: 'number',
            alias: 'w',
            description: 'The width of the house'
        },

        length: {
            type: 'number',
            alias: 'l',
            description: 'The length of the house'
        }
    },
 
    function Result ( input ){
        let Studs = Housebuilt( Number( input.width ), Number( input.length ));
        let Beams = Totalbeams( Number( input.width ), Number( input.length ));
        console.log("Gerald you need", Studs, "2x4s and", Beams, "4x4s without 10% waste!")
        console.log("You will need", Math.ceil(TenPercent(Studs)), "2x4s and", Math.ceil (TenPercent(Beams)), "4x4s with 10% waste.")
    }  

);

// Function to add 10% waste
function TenPercent (onepointone:number){
    let percent = onepointone * 1.10 
    return percent
}   
 
yargs.help();
yargs.parse();