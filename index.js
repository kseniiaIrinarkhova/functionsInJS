/**Part 1: Thinking Functionally
write functions that accomplish the following:*/
// Take an array of numbers and return the sum.
function getArraySum(numArray) {
    let sum = 0;
    //for each element add it value to sum 
    numArray.forEach(element => {
        sum += element;
    });
    return sum;
}
// Take an array of numbers and return the average.
function getAverageNumber(numArray){
    let sum = getArraySum(numArray); //get the sum of elements
    return sum/numArray.length //calculate the average number and return it
}
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

console.log(`
***********************************
******Part 1 **********************
***********************************`);
//declare array with numbers
let nums = [1, 3, 5, 8, -10, 3];
console.log(`input: nums = ${nums}`);

//call the getArraySum() function
console.log("\nFunction that sums all elements in array");
let sum = getArraySum(nums);
console.log(`function output: ${sum}`);

//call the getAverageNumber() function
console.log("\nFunction for getting average number");
let averageNumber = getAverageNumber(nums);
console.log(`function output: ${averageNumber}`);

