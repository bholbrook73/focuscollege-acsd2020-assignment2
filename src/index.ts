
import calcWallStuds from './modules/totalWallStuds';
import buildHouse from './modules/buildHouse';
import accountForWaste from './modules/accountForWaste';
import postsInBuilding from './modules/postsInBuilding';
import totalWallStuds from './modules/totalWallStuds';


// importing and requiring yargs to use in apllication
import yargs = require('yargs');

let parameters

// Creates a new yargs command:
// FORMAT:  node dist/index.js [command] --[parameter] [value] --[parameter] [value]
// EXAMPLE: node dist/index.js calc-wall-studs --width 8 --legth 8

    yargs.command(
    //Parameter #1 this will be what we type into the command line first
    'calc-lumber',
    
    //Parameter #2 describes the command so that the --help flag is helpful
    'Calculate the number of 2x4s and 4x4s needed to build a house',

    //Parameter #3 defines the parameters we need for our command
    {
        width: {
            type: 'number',
            // The alias can be used with a single '-' infront of the parameter
            alias:'w',
            description:"The width of the house"
        },
        length: {
            type: 'number',
            // The alias can be used with a single '-' infront of the parameter
            alias: 'l',
            description: 'The length of the house'
        }
    },

    // Parameter 4 defines the function we want to run once the arguments are parsed
    function ( args ){

        let length:number = args.length;
        let width:number = args.width;
        
        console.log("The total number of 2x4's needed is: ", totalWallStuds(length, width));
        console.log("The total number of 4x4's needed is: ", postsInBuilding(length, width));

    }
);


// tell yargs to include the --help flag 
yargs.help();

// tell yargs to parge the parameters
yargs.parse();

