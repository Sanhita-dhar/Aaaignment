
// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(num1, num2) {
    return num1 + num2;
    }
    const result1 = calculateSum(5, 10);
    console.log(result1);

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven (number){
    return (number % 2 === 0);  
}
const result2 = isEven (10);
    console.log(result2);


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr) {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  const result3 = findMax([1, 2, 3, 4, 5])
  console.log(result3); 
  

  // 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  const result4 = reverseString("hello");
  console.log(result4);

  //5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  const result5 = filterOddNumbers([1, 2, 3, 4, 5]);
  console.log(result5);

  //6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  const result6 = sumArray([1, 2, 3, 4, 5]);
  console.log(result6);

  // 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
  function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  const result7 = sortArray([5, 3, 8, 1, 2]);
  console.log(result7);

  // 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized.
  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const result8 = capitalizeFirstLetter("capitalize");
  console.log(result8);
  