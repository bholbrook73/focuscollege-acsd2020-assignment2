import { Console, debug } from 'console';
import { command, number } from 'yargs';

// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments

import yargs = require('yargs');

let parameters
//length, width; //added = length,width;

//yargs
// create a new yargs "command"

yargs.command(



    // yargs.command paramater #1
    // name the command with no spaces
    // this will be the first parameter we send:
    // format:  node dist/index.js [command]
    // example: node dist/index.js calc-wall-studs
    'calc-lumber-required',

    // yargs.command paramater #2
    // describe the command so that the --help flag is helpful
    'Calculate the total lumber required in pillars and studs.',

    // yargs.command paramater #3
    // define the parameters we need for our command
    {

        // format:  node dist/index.js [command] --[parameter] [value]
        // example: node dist/index.js calc-wall-studs --width 8
        thzwidth: {
            
            // format:  node dist/index.js [command] --[parameter] [value must be number]
            // example: node dist/index.js calc-wall-studs --width 8
            type: 'number',

            // format:  node dist/index.js [command] -[parameter] [value]
            // example: node dist/index.js calc-wall-studs -w 8
            alias: 'w',

            // this adds the description for the --help flag
            description: 'The width of the house'

        },

        // format:  node dist/index.js [command] --[parameter] [value] --[parameter] [value]
        // example: node dist/index.js calc-lumber-required --width 8 --legth 8
        // node dist/index.js calc-lumber-required --width 8 --legth 8
        //npm start -- calc-lumber-required --width 18 --length 8
        //this was an example, why then the example is different :U

        length: {
            type: 'number',
            alias: 'l',
            description: 'The length of the house'
        }

    },

    // yargs.command parameter #4
    // define the function we want to run once the arguments are parsed
    // the parsed arguments will be provided via the first paramater passed in
    // we've called it 'args' in this function

   //define the function we want to run once the arguments are parsed.
   
    function( args ){

        //I need a function that can extract args? arguments, 

        //length = length:yargs.Arguments;
        // length:args;

        length:Number;
        width:Number;

        let length = args.l;
        let width = args.w;



    // let length = args.length;
    // let width = args.width;
//this can not be correct?

   // length:number;
    // width:number;

         
        const cornerPillars = 3.5*2;//inches
        //width is 3.5 eats up space on both sides of a given effective length. Can be included twice or value*2               
                      
        let pillarINW:number;
        let pillarINL:number;
           //store of number in length in loop, need not sure why but you can't run a 'let' declaration in a loop :I
        pillarINL = 2;
        pillarINW = 2;
        

           function FindTotalPillarsINL(length:number, pillarINL:number,  pillarsINLTot:number ):number 
           {
               while (length >20) //length in feet, >8feet = length of 1 2x4, 4x4 ever l of 2x4
                   {
                       length -= 20;
                       pillarINL += 1;
       
                       if(length <19){break;}
                   }
               return  pillarINL;
           }
            //we get back number of pillars in length
        
           function FindTotalPillarsINW(width:number, pillarINW:number, pillarsINWTot:number)
           {
               while (width >20)
                   {
                        width -= 20;
                        pillarINW += 1;
                   
                         if(width <8){break;}
                    }
               return pillarINW;
           }
           //we get back numbers of pillar in width.
       
       //maybe a new function either way all calculations have taken place inside of fucntion(s)
        

       function EffectiveLengthINLength(length:number, cornerPillars:number, pillarsINLTot:number):number{
            //if length if passed in feet and corner pillar is inches, we got a problem houston
            
            let EffectiveLengthINL = (length - ( (cornerPillars + pillarsINLTot*3.5)/12) );
            
            //effective length returns in feet. And also we need to add the above+ so no order of operations errors
            //need to convert into feet, so the subtraction works   
            return EffectiveLengthINL;
        }

        function EffectiveLengthINWidth(width:number, cornerPillars:number, pillarsINWTot:number):number{

            let EffectiveLengthINW = (width - ( (cornerPillars + pillarsINWTot*3.5)/12) );
            
            return EffectiveLengthINW;
        }
        
        function FloorINL2x4Calc(EffectiveLengthINLength:number):number
        {
            let FloorINL2x2 = Math.ceil(EffectiveLengthINLength/8);

            return FloorINL2x2;
        }

        function FloorINW2x4Calc(EffectiveLengthINWidth:number):number
        {
            let FloorINW2x2 = Math.ceil(EffectiveLengthINWidth/8);

            return FloorINW2x2;
        }

    function TotalFloor2x4Calc(FloorINL2x4Calc:number, FloorINW2x4Calc:number):number
        {
       let TotalFloor2BY4 = (FloorINL2x4Calc*2)+(FloorINW2x4Calc*2);
       return TotalFloor2BY4;
        }
//each is basically one side. Simple but as per instructional,cleaner and more elegant to go this route.
//now we have 2 discrete functions to deal with the length and width of 
    
     
function TotalCeiling2x4Calc(TotalFloor2x4Calc:number):number
    {
        let TotalCeiling2x4 = TotalFloor2x4Calc;
        return TotalCeiling2x4;
    }   
//TotalCeiling is equievalent and maintained so as not to cut corners.



//the verticals have*2 I think because of the fact they need to cover both walls
function Vertical2x2inLength(EffectiveLengthINLength:number):number
    {
        let TotVerticalINL2x4 = ((EffectiveLengthINLength*12)/16)*2;

        return TotVerticalINL2x4;
    }
//slight hiccup because effetctive length was in feet to calculate the required amount of 2x4
//too walls thus *2


//need to plug in function returns for proper config.
function Vertical2x2inWidth(EffectiveLengthINWidth:number):number
    {
        let TotVerticalINW2x4 = ((EffectiveLengthINWidth*12)/16)*2; //Reminder *12 >feet to inches >/16 16 inch chunks *2(2walls)
        return TotVerticalINW2x4;
    }


    function PillarTally(FindTotalPillarsINL:number, FindTotalPillarsINW:number):number
    {
        let PillarTotal = FindTotalPillarsINL + FindTotalPillarsINW;
        return PillarTotal;
    }


function  FinaleTotalof2x4s(TotalCeiling2x4Calc:number, TotalFloor2x4Calc:number, 
    Vertical2x2inLength:number, Vertical2x2inWidth:number, PillarTally:number):number 
    //pillartally is there because each pillar has a 2by4 in the inner world doesn't say where doesn't say how.

    {
        let Total2x4 = (TotalCeiling2x4Calc+TotalFloor2x4Calc+Vertical2x2inLength+Vertical2x2inWidth+PillarTally);
        return Total2x4;
    }
//Pillar Total But it corresponds 1:1 to each pillar having it's own pet 2by4


//pillar tally +10% rounded
function AlittleOntheTop(FinaleTotalof2x4s:number):number
    {
        let finaltotalWithError = Math.round(FinaleTotalof2x4s+(FinaleTotalof2x4s*(10/100)));
        //no real reason to use 10/100 instead of .1 just looks better
        return finaltotalWithError;
    }
    console.log(AlittleOntheTop);

// pillar tally +10% rounded
function PillarPlus(PillarTotal:number):number
    {
        let FinalPillarTally = Math.round(PillarTotal+(PillarTotal*(10/100)));
        return FinalPillarTally;
    }
    console.log(PillarPlus);

    
    console.log("Total 2x4's" + (AlittleOntheTop));
    console.log("Total 4x4's" + PillarPlus); 
//not sure why these aren't running :I

        console.log( args )
        
            //these functions don't do anything.   
    }

);// :(



// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();