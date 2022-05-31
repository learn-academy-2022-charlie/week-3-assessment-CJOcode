// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibSeq", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns an array the length of the input containing the numbers of the Fibonacci sequence.", () => {

        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
  
//  Good failure!
//   FAIL  ./code-challenges.test.js
//   fibSeq
//     ✕ returns an array the length of the input containing the numbers of the Fibonacci sequence. (1 ms)

//   ● fibSeq › returns an array the length of the input containing the numbers of the Fibonacci sequence.

//     ReferenceError: fibSeq is not defined

// b) Create the function that makes the test pass.

// Pseudo:
// create a function named fibSeq
  // Function will take in an argument as a number
    // Then function will take that number and create a new array that is the length of the number 
    // Once the array length is determined, iterate through the array and replace the values with the fibonacci sequence 

    const fibSeq = (num) => {
        let numArr = []
        let fibArr = []
        if (num > 2) { 
            for (i=0; i < num; i++)
                numArr.push(num / num)
            }    
            for (i=2; i < numArr.length; i++) {
                numArr[i] = numArr[i - 1] + numArr[i - 2] 
                fibArr.push(numArr[i])
            }
            let finalNumArr = numArr.slice(0,2)

            return finalNumArr.concat(fibArr)
        }

    // Tried this problem for over 3 hours and finally found the solution!  
    // PASS  ./code-challenges.test.js
    // fibSeq
    //   ✓ returns an array the length of the input containing the numbers of the Fibonacci sequence. (3 ms)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
