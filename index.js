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
function getLongestWord(stringArray){
    let word = '';
    //take each element in stringArray
    stringArray.forEach(element => {
        //check if length of word less than element - assign element to word
        // otherwise live it as it is, it's a longest word
        word.length < element.length ? word = element : word = word;
    });
    return word;
}
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function getStringsLongerThan(stringArray, lengthLimit){
    let filteredArray = []; //declare new array to avoid changes in input parameter
    stringArray.forEach(element =>{
        if (element.length > lengthLimit){
            filteredArray.push(element) //add only elements that length greater than lengthLimit
        };
    });
    return filteredArray;
}
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printAllNumbetsBetween(number){
    if(number == 1){ console.log(number)} //the bottom of recursion. start point of out output
    else{
        printAllNumbetsBetween(number-1); //call function for less value. recursion
        console.log(number); //log all numbers recursively
    }
}

/********************************************************************************************* */
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
console.log(`function output: ${averageNumber}\n`);

//declare array with strings
let words = ['say', 'hello', 'in', 'the', 'morning'];
console.log(`input: words = ${words}`);

//call getLongestString() function
console.log("\nFunction for getting longest string");
let longestWord = getLongestWord(words);
console.log(`function output: ${longestWord}`);

//call getStringsLongerThan() function
let n = 3;
console.log(`\nFunction for getting strings longer than n = ${n}`);
let filteredWords = getStringsLongerThan(words,n);
console.log(`function output: ${filteredWords}\n`);

//call recursion function
n = 15;
console.log(`\nRecursively output all numbers between 1 and n = ${n}`);
printAllNumbetsBetween(n);

/**Part 2: Thinking Methodically */
let input = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Use callback functions alongside Array methods to accomplish the following:


// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

/**************************************************************************************** */
console.log(`
***********************************
******Part 1 **********************
***********************************`);
console.log('Input:');
console.log(input);

// Sort the array by age.
input.sort((x,y) => x.age - y.age);
console.log("\n Sorted:")
console.log(input);

// Filter the array to remove entries with an age greater than 50.
let filteredArray = input.filter((x) => x.age <= 50); 
console.log("\n Filtered:")
console.log(filteredArray);