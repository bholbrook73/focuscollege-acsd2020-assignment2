
// this calculates the number of studs required for a length of wall
export default function studsInLength( lengthInInches:number, distanceApartInInches:number ){

    return Math.ceil( lengthInInches / distanceApartInInches );

}
