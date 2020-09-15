# Focus College ACSD Assignment 2

This respository is intended for the use of Focus College Students enrolled in the 
Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

# Gerald's Contracting Application

![Gerald_Img]

# Summary

---



## Running the Application
**_Do not use ~~node dist/index.js~~_**

To **build** the application
```
tsc
```
To **run** the application using node
```
node dist/index.js calc-wood-needed --width 8 --length 8
```
To **build & run** the application using npm
```
npm start -- calc-wood-needed --width 8 --length 8
```

---



## Scenario

Gerald has received your email suggesting the rounding change to calculate the number of studs successfully, and was able to use your application. He was very excited that the application worked as he expected, and he has agreed with your math on the stud calculation.

Gerald has an additional problem though. He's been so successful that he's getting bigger and bigger orders and he needs to place additional beams throughout the wall lengths. He would like the application to tell him not only how many 2x4's he needs, but how many 4x4's he needs.

Gerald has also mentioned that he finds it difficult to re-write the application code quickly, so he would like to be able to just give it the dimensions.

## Gerald's Requirements
* Each wall has 2x4’s flat against the floor for the length of the edge of a wall.

* Each wall has vertical 2x4’s spaced 16 inches apart (measured from outside edge of a board to the next outside edge; the board is included in the 16 inches)

* Each wall has 2x4’s flat against the ceiling for the length of the edge of a wall.

* Each 4x4 post has a 2x4 on its side as part of the inner wall.

* Gerald buys 10% MORE than a perfect calculation to account for waste.

* Gerald notes that you can’t purchase a partial piece of lumber, so round up a decimal in the final calculation

* 2x4’s are actually 1.5" x 3.5”

* 4x4’s are actually 3.5” x 3.5”

* Gerald only buys 8’ 2x4’s and 4x4's

* Gerlad is not reusing boards once they're cut, and to avoid waste he always places a beam after a full length board as long as doing so doesn't require that he purchase an extra beam
---

## Example
Gerald has given us an example to help us understand his intentions, using a 16' by 24' house:

1. Wall 1 is 16 feet
2. Wall 2 is 24 feet

_Wall 1 (16 feet)_

* Wall 1 is under 20 feet, so does not need a post in it.
* 2 boards required for the bottom
* 2 boards required for the top
* 13 vertical boards required in the wall, including the sides
Total: 17 boards.

_Wall 2 (24 feet)_

* Considering the beams, the 24 foot wall will still have a span greater than 20 feet, so we need a beam in the wall

* If we place the beam exactly at 20 feet, we'll have to cut boards on both sides, so he would put the beam at 16 feet so he only has to cut the boards on the short side.

* a 16 foot wall, on one side of the extra beam, requires 17 boards

* The remaining wall (8 feet minus the width of the extra beam, and both outside beams) requires 8 boards. (Gerald did originally say 10, but remembering your email corrected himself).

* Total: 25 boards, 1 extra beam

#### House

* The house required posts on the four corners, regardless of size

[ +4 Beams ]

* Wall 1 requries 17 boards

[ +17 Boards ]

* Wall 2 requires 25 boards and one extra beam

[ +25 boards, +1 Beam ]

* Wall 3 is the same as wall 1

[ +17 Boards ]

* Wall 4 is the same as wall 2

[ +25 boards, +1 Beam ]

* Perfect calculation: 84 boards, 6 beams

* Add 10% for Waste

[ +8.4 boards rounded up to 9, +0.6 beams rounded up to 1 ]

#### TOTAL PURCHASE:

* Boards: 93

* Beams: 7

---
## Test log 

| House Measurement | Studs Required | Beams Required |     Last Test Run by     |
| ----------------- | -------------- | ---------------| ------------------------ |
|       8 x 8       |       44       |        5       | **Khatab AL DAGHISTANI** |
|      18 x 8       |       64       |        5       | **Khatab AL DAGHISTANI** |
|      16 x 24      |       91       |        7       | **Khatab AL DAGHISTANI** |
|      49 x 22      |       152      |        11      | **Khatab AL DAGHISTANI** |
---

### Note to Other developers

I used the [yargs package] for the processing of command line paramters. For more information on that package go to the [yargs package] website.

[yargs package]: https://www.npmjs.com/package/yargs

[Gerald_Img]: https://www.safetyandhealthmagazine.com/ext/resources/images/2016/04-april/construction-safety.jpg?1458739490