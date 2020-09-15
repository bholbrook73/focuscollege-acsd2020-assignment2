
// this calculates the number of studs required for a length of wall
export default function studsInLength( lengthInInches:number, distanceApartInInches:number ){

    let studs = Math.ceil( lengthInInches / distanceApartInInches );
    let isNotPerfect = Math.min(lengthInInches % distanceApartInInches, 1); //Only will return 0, or 1
    let isPerfect = (isNotPerfect * -1) + 1;
    
    studs += isPerfect;
    return studs;

}
