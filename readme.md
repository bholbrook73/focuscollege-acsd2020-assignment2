### Gerald's Calculator v2
---
![Gerald's Image]

---


# How to use this Application
To run a calculation, pass in two parameters:
* The Width of one wall 
* The length of one wall 
* Will return with total studs and beams needed for your project !
#### Examples:
```
Using Node to run the application: 

node dist/index.js calc-wood-needed --width 16 --length 24
```

```
To build & run the application using npm

npm start -- calc-wood-needed --width 8 --length 8
```
----
## Scenario:  (Provided by Gerald)
### The application was made using requirement's provided by Gerald:
Gerald has received your email suggesting the rounding change to calculate the number of studs successfully, and was able to use your application. He was very excited that the application worked as he expected, and he has agreed with your math on the stud calculation.

Gerald has an additional problem though. He's been so successful that he's getting bigger and bigger orders and he needs to place additional beams throughout the wall lengths. He would like the application to tell him not only how many 2x4's he needs, but how many 4x4's he needs.

Gerald has also mentioned that he finds it difficult to re-write the application code quickly, so he would like to be able to just give it the dimensions.

*  Each wall has 2x4’s flat against the floor for the length of the edge of a wall.
*  Each wall has vertical 2x4’s spaced 16 inches apart (measured from outside edge of a board to the next outside edge; the board is included in the 16 inches)
*  Each wall has 2x4’s flat against the ceiling for the length of the edge of a wall.
*  Each 4x4 post has a 2x4 on its side as part of the inner wall.
*  Gerald buys 10% MORE than a perfect calculation to account for waste.
*  Gerald notes that you can’t purchase a partial piece of lumber, so round up a decimal in the final calculation
*  2x4’s are actually 1.5" x 3.5”
*  4x4’s are actually 3.5” x 3.5”
* Gerald only buys 8’ 2x4’s and 4x4's
*  Gerlad is not reusing boards once they're cut, and to avoid waste he always places a beam after a full length board as long as doing so doesn't require that he purchase an extra beam







[Gerald's Image]: https://i.pinimg.com/originals/c5/0e/0a/c50e0a205f5d839a09c2239e45dee376.png