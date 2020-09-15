// Import buildHouse from House to use it here
import calcWoodNeeded from './Build/WoodNeeded';

// import yargs to re-use code it, more information go to
// www.npmjs.com/package/yargs
import yargs = require('yargs');



// build interactive command line by using yargs to pass user arguments
yargs.command(

    //alice to apply yargs
    'calc-wood-needed',


    //--help flag for user
    'Calculate the number of studs required to stick frame a house for Gerald',

    //yargs parameters
    {

    //alice for user parsing 
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
    function( args ){

         // User inputs (building dimensions)
         let houseLengthInFeet =  Number( args.length) ;
         let houseWidthInFeet = Number( args.width ) ;
         
 
         // Calculate total purchase beams + studs
         let purchaseWoods = calcWoodNeeded(houseWidthInFeet, houseLengthInFeet);
        
         //total studs
         let nbr_2x4 = purchaseWoods.totalStuds;
         let nbr_2x4_PlusWast = purchaseWoods.wastStuds; 

        //total beams
         let nbr_4x4 = purchaseWoods.totalbeams;
         let nbr_4x4_PlusWast = purchaseWoods.wastBeams;
 
        //Output total purchase (Beams and Stud)
         console.log("**************************************************************")
         
         console.log("House, Number of lumbers needed without Wast = " , nbr_2x4);
         console.log("House, Number of lumbers needed with Wast = " , nbr_2x4_PlusWast);
         
         console.log("**************************************************************")
 
         console.log("House, Number of beams needed without Wast = " , nbr_4x4);
         console.log("House, Number of beams needed with Wast = " , nbr_4x4_PlusWast);

    }

);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();