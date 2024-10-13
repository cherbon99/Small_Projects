const code = require("./code")

describe("test remove even", () => {
   test("Removes even numbers from array", () => {
   const numbers = [1,2,3,4,5,6,7,8,9];
   const result = code.removeEven(numbers);
   expect(result).toEqual([1,3,5,7,9]);
   });

   
});