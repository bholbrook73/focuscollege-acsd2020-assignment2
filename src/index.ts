import yargs = require('yargs');


let parameters = 
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
        },

        

    },

    function ( args ){
        // wood dimensions
let twoByFourWidthInInches = 3.5;
let twoByFourHeightInInches = 1.5
let postWidthInInches = 3.5;
 
// Gerald's numbers
        let distanceapartInInches = 16;
        let w1 = args.width;
        let w2 = args.length;
        let w3 = args.width;
        let w4 = args.length
        


 // this function converts the size of the wall from feet into inchs. 
  function wallsizeininchs(wallsize:number){

return (wallsize * 12)
}

let w1ininchs = (w1 * 12);
let w2ininchs = (w2 * 12);
let w3ininchs = (w3 * 12);
let w4ininchs = (w4 * 12);

// this function calculate the  number of studs for the length of the wall. 
function studsinlengh(walllengthinchs: number, distanceapartInInches:number)
{

 
    
    return (walllengthinchs / distanceapartInInches) 
}
let wall1studs = Math.round(w1ininchs / distanceapartInInches)
let wall2studs = Math.round(w2ininchs / distanceapartInInches)
let wall3studs = Math.round(w3ininchs / distanceapartInInches)
let wall4studs = Math.round(w4ininchs / distanceapartInInches)


// this function will caculate the number of the studs needed for the hole house 
// adding 6 studs for the bottom, top, and the sides.

function totalstuds(wallstuds:number){



    return (wallstuds + 6);
}
    
    let totalstuds1 = (wall1studs + 6) ;
    let totalstuds2 = (wall2studs + 6) ;
    let totalstuds3 = (wall3studs + 6) ;
    let totalstuds4 = (wall4studs + 6) ;
    
    // gerald wants 10% waste markup on total studs
function accountForWaste( perfectNumberOfStuds:number ){
 
    return Math.round(perfectNumberOfStuds * 1.1);
 
}

 

 let perfectNumberOfStuds = Math.round(totalstuds1+totalstuds2+totalstuds3+totalstuds4) * 1.1;
 
//whenever the number of beams increases by one the number of studs will decrease by one 
// the beams number increases wherever the size of 8'  wall increases by a full length board (8).
// so for every 8' we need a beam.
 

function beams(wall_size:number){
   return wall_size;
}
 let beamsnumber1 = beams(Math.ceil(args.width)) * 0.1;
 let beamsnumber2 = beams(Math.ceil(args.length)) * 0.1; 
 let beamsnumber3 = beams(Math.ceil(args.width)) * 0.1;   
 let beamsnumber4 = beams(Math.ceil(args.length)) * 0.1; 

 console.log('number of beams required for this house',beamsnumber1)

 
  console.log()
    
});


yargs.help();

yargs.parse();