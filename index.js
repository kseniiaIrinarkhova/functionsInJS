/**Part 1: Thinking Functionally
write functions that accomplish the following:*/
// Take an array of numbers and return the sum.
function arraySum(numArray) {
    let sum = 0;
    numArray.forEach(element => {
        sum += element;
    });
    return sum;
}
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

console.log(`
***********************************
******Part 1 **********************
***********************************`);
console.log("\nFunction that sums all elements in array");
let nums = [1, 3, 5, 8, -10, 3];
let sum = arraySum(nums);

console.log(`input: nums = ${nums}`);
console.log(`function output: ${sum}`);