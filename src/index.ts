import { Console, debug } from 'console';
//so we don't need to worry about the command line integration
//just the calc


//E1 note : If statement for that last section
//where if you don't have to buy an extra 4x4 at the end. Meaning if,
//it's not 8 feet, place a 2by4 else 4x4/2by4+ point being
//the logic resembles an if else.


//////////////////////////////////////////////////////////////////////
//YARGS BELOW


// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');

let parameters = 


//yargs thing means parameterization is functional I think!

//yargs
// create a new yargs "command"
yargs.command(

    // yargs.command paramater #1
    // name the command with no spaces
    // this will be the first parameter we send:
    // format:  node dist/index.js [command]
    // example: node dist/index.js calc-wall-studs
    'calc-wood-needed',

    // yargs.command paramater #2
    // describe the command so that the --help flag is helpful
    'Calculate the number of studs required to stick frame a house for Gerald',

    // yargs.command paramater #3
    // define the parameters we need for our command
    {

        // format:  node dist/index.js [command] --[parameter] [value]
        // example: node dist/index.js calc-wall-studs --width 8
        width: {
            
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
        // example: node dist/index.js calc-wall-studs --width 8 --legth 8
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
    function( args ){
        
        // ----------------------------------------------------------------------------------- |
        // NOTE TO STUDENTS:                                                                   |
        // This is where you write your application with access to the command line arguments  |
        // ----------------------------------------------------------------------------------- |

        // inspect the output to infer how you might access the arguments
        console.log( args )

    }

);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();


//////////////////////////////////////////////////////////////////
///Actual calculator, 


/*
Arighty may as well start with the variable declarations.

*/


/*
    var WallLength;
    WallLength = 12;
//dynamically set variables meaning you don't do declarations you just set.
*/

//So we have a calculation that requires us to remove the 4x4'
//from the consideration when generating a total lumber for that part
//so in this case every certain number of wall we now need to add that, and then continue adding standard 2'4s
//meaning a pillar, + width of the pillar.

//x=illar, - = 2by 4 in length
// (X)----------(X)
//the length of matters and need to be factored in.


//I also did the 16' inches of wall wrong. partitian vertically
//

//we can double the operation for along the floor
//because the ceiling is basically the same



//each wall, (walls,) has vertical 2'4bys (standing up)
//measured from outside edge of a board to 
//board is inculuded in the 16 inches, 

// for each 4x4 you need +1 2by4


//final + final(10/100) to get the material.
//gerald doesn't reuse cut boards, so round up. He uses it like a full board.


//places a beam after full length 2by4 along the floor
//as long as he doesn't need an extra beam>??????????




//the 16 inch stud wall confuses me. I am not sure what to do.
/*

I am gonna try to annotate it.

function buildWall( outerLengthInFeet:number ){
    Build wall? Outer laength in feet.


Okay so here is the equation for inner feet

    function calcInnerWallWidth( outerWallWidthInFeet:number ){
    
    let innerWallWidthInInches = (outerWallWidthInFeet * 12) - (postWidthInInches * 2);
    return innerWallWidthInInches;}

    //to findinnerwall width, we subtract the posts from the full length of the wall
    makes sense, we cut away the 4x4s to find the length required and then 2by4s



    let length = calcInnerWallWidth( outerLengthInFeet );
        //we use the inner wall width,
        //to derive th

    let studsInsideWall = studsInLength( length, distanceBetweenStudsInInches );
        2by4s inside the wall, stud in length(length*distance between studs)
   ??shouldn't it be in width. Meaning, the width of the board facing up?

   Maybe visualization.


    let studsOnTopAndBottom = calcStudsOnTopAndBottom( length );
    let totalStuds = studsInsideWall + studsOnTopAndBottom + 1;
    return totalStuds;

    Note: are they standing tall along the length of the wall.???
    Need serious consideration.






    (X)------------(X)------------(x)
    (X)--/--/--/--(X)--/--/--/--(X)
4 times over. with possible different lengths and widths. so you need
to keep track of specifically both sides.

*****!
you need to keep track of pillars
keep track of things lying across the floor and ceiling but same way!
//keep tarck of vertically slices 2by4s every 8 feet between pillars 
//which are also every 8 feet.


while loops can work depending on if you want to variable incrementation

I can see a few iff statements, loop an iff statement that adds pillars
for every 8 feet of wall while dividing the total or subtracting 8 feet

I don't see anything too functional

technically you could have an if else efficency thing
where if the length = width you just *2 else you do the thing for the
rest of the equatio

For loops increment the index, and index is based on how many times
        wall is greater than 8, each loop increment by 1,

idk. I might be missing something. i want to do well on this 1.


    
    wall 1 = wall length - pillar(3.5 inches)vertically
        ^wall length/8 feet to see how many 2by4s needed roudned up?

        inner wall, - pillars every collection of spaces between
        4x4s requires that context based activation of 16inches of boards in between

        along 8 feet each gap. meaning.

        is there not 1 function for the 8 feet chunk of wall
        and then a function that keeps a track of how many 8 feet
        lengths there are.
        
What am I missing? I guess when i build it ground up sequentially I'll know


        1. Find inner wall length.
        (wall length - pillars every 8 feet ( 3.5 inches) in length)

        2. Divide every 8 feet chasm by 1.3 feet or 16 inches to get
        the net amount of lumber required?

        

*/




//?O_O?
//only thing entered seems to me is length/width no?
const twoByFourWidthInInches = 3.5; //in the other one I see it refrenced only once
const twoByFourHeightInInches = 1.5; //Doesn't matter. Only referneced once 

const cornerPillars = 3.5*2;//inches
//because it technically subtracts from the length on both sides, 

const TwoByFourLength = 8.0; //all are 8 feet, meaning conversion at end req.

//each 4by4 = Inner2BY4

const postWidthInInches = 3.5*2; //length doesn't matter, as all
    //are vertical. //why is th width *2?
//posts are (3.5x3.5) meaning //or is this an earlier musing which not really though


//gerald doesn't reuse boards when cut. He always placed a beam after a full length board.
//aslong as he doesn't need a new beam. 
//No reuse, unless it rounds up to an extra board??? TBH
//send bradley messages for clarifications as needed.



//length will be passed in feet, so I have to work around that.
    //12 inches 1 foot
    //1 foot 12 inches



//let not okay, var okay

let TotalPillarINL; 
let TotalPillarINW;
//because the length/width are equivelant *2 can happen at really any junction
//so I think it should be doubled later.
//Which would double the amount? Also rounding isn't taken into account.


var pillarsINLTot;
var pillarsINWTot;
//pillar total variabel returns


let lengthRunTimeStore;
length = lengthRunTimeStore;
//not sure it will store data, but then again wit shouldn't update.

var pillarINW;
var pillarINL;
//store of number in length

var effectiveLength;
var effectiveWidth;


//do I need to store length seperately.


/////////// Total Pillars

    function FindTotalPillarsINL(length:number, pillarINL:number,  pillarsINLTot:number ):number 
    {

        while (length >8) //length in feet, >8feet = length of 1 2x4, 4x4 ever l of 2x4
            {
                length -= 8;
                pillarINL += 1;

                if(length <8){break;}
            }
        return  pillarsINLTot = pillarINL; //technically we can just use pillarINL 
    }
    //we get back number of pillars in length


    function FindTotalPillarsINW(width:number, pillarINW:number, pillarsINWTot:number)
    {
        while (width >8)
        {
            width -= 8;
            pillarINW += 1;
            
            if(width <8){break;}
        }
        return pillarsINWTot = pillarINW;
    }
    //we get back numbers of pillar in width.

//maybe a new function either way all calculations have taken place inside of fucntion(s)



////////Effective Length

function EffectiveLengthINLength(length:number, cornerPillars:number, pillarsINLTot:number):number{
//if length if passed in feet and corner pillar is inches, we got a problem houston
let EffectiveLengthINL = (length - ( (cornerPillars + pillarsINLTot*3.5)/12) );
//effective length returns in feet. And also we need to add the above+ so no order of operations errors

//there are two a pop (c----p-----p--c) you always have 2 corners to a given length/width
    //need to convert into feet, so the subtraction works   
//corner pillar =3.5 inches, pillar is also 3.5 inches. Do we measure 2 tho, at both ends?
return EffectiveLengthINL;
}


function EffectiveLengthINWidth(width:number, cornerPillars:number, pillarsINWTot:number):number{

    let EffectiveLengthINW = (width - ( (cornerPillars + pillarsINWTot*3.5)/12) );
    
    return EffectiveLengthINW;
}

//length will be in feet. Pillars will be dividing it in inches. Our c

//these only cover 2 sides, need 2 more.


//let EffectiveLengthINW = (length - cornerPillars)

///Using effective length perside we can get the required boards. And vertical boards.




//previosuly we converted the space earten by the pillars into feet through /12
//thus we can now operate without a problem

function FloorINL2x4Calc(effectiveLength:number):number
    {
        let FloorINL2x2 = Math.ceil(effectiveLength/8);

        return FloorINL2x2;
    }

function FloorINW2x4Calc(effectiveWidth:number):number
    {
        let FloorINW2x2 = Math.ceil(effectiveWidth/8);

        return FloorINW2x2;
    }

function TotalFloor2x4Calc(FloorINL2x2:number, FloorINW2x2:number):number
    {
       let TotalFloor2BY4 = (FloorINL2x2*2)+(FloorINW2x2*2);
       return TotalFloor2BY4;
    }
//each is basically one side. Simple but as per instructional,cleaner and more elegant to go this route.
//now we have 2 discrete functions to deal with the length and width of 

function TotalCeiling2x4Calc(TotalFloor2BY4:number):number
    {
        let TotalCeiling2x4 = TotalFloor2BY4;
        return TotalCeiling2x4;
    }

//TotalCeiling is equievalent and maintained so as not to cut corners.
// TotalCeiling and TotalFloor keep track of the first 2 

//the verticals have*2 I think because of the fact they need to cover both walls
function Vertical2x2inLength(effectiveLength:number):number
    {
        let TotVerticalINL2x4 = ((effectiveLength*12)/16)*2;

        return TotVerticalINL2x4;
    }
//slight hiccup because effetctive length was in feet to calculate the required amount of 2x4
//too walls thus *2

function Vertical2x2inWidth(effectiveWidth:number):number
    {
        let TotVerticalINW2x4 = ((effectiveWidth*12)/16)*2;

        return TotVerticalINW2x4;
    }
//too walls thus *2

function FinaleTotalof2x4s(TotalCeling2x4:number, TotalFloor2BY4:number, TotVerticalINL2x4:number, TotVerticalINW2x4:number)
    {
        let Total2x4 = (TotalCeling2x4+TotalFloor2BY4+TotVerticalINL2x4+TotVerticalINW2x4);
        return Total2x4;
    }

function AlittleOntheTop(Total2x4:number):number
    {
        let finaltotalWithError = Math.round(Total2x4+(Total2x4*(10/100)));
        //no real reason to use 10/100 instead of .1 just looks better
        return finaltotalWithError;
    }

function PillarTally(pillarsINLTot:number, pillarsINWTot:number):number
    {
        let PillarTotal = pillarsINLTot + pillarsINWTot;
        return PillarTotal;
    }

function PillarPlus(PillarTotal:number):number
    {
        let FinalPillarCount = Math.round(PillarTotal+(PillarTotal*(10/100)));
        return FinalPillarCount;
    }

console.log("Total 2x4's" + AlittleOntheTop);
console.log("Total 4x4's" + PillarPlus);
//final needs to add up all the pillars into one function, under Final Result.
//There we can also add *10 of extra material.