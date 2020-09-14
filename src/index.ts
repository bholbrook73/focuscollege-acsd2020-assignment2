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
    console.log("Gerald you need", Studs, "studs","and", Beams, "4x4s!")
}  
   
);
 
yargs.help();
yargs.parse();