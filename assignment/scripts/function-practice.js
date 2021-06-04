console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello(saying) {
  return `Hello ${saying}`;
}
// Call the function to test
console.log(hello('world'));// should read hello world..confirmed!
console.log(hello('you handsome devil')); // should read hello you handsome devil..!


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}`;
}

// Remember to call the function to test
console.log(helloName('joe'));// should read hellp joe..confirmed!
console.log(helloName('schmoe'));// should read hello schmoe.. confirmed!

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  //called the function addNumbers
}
console.log('should equal 100=', addNumbers(50, 50));//confirmed in console log..
console.log('10 plus 10=', addNumbers(10,10));//confirmed in console log!

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  return num0 * num1 * num2;
} // end multiplyThree
// call to function test
console.log('2*4*6=', multiplyThree(2, 4, 6));//should equal 48..confirmed!!

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
console.log(' in isPositive:', number);
  let answer = number > 0;
  if ( number > 0 ){
    return true;
  }
    else return false;
}
// tested multiple positive and negative numbers to test nested conditional.
//console log test confirmed with appropriate output.

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
  function getLast( array ) {
    let lastIndex = array.length-1
    return array[lastIndex];
  }
  console.log(getLast([1, 2, 3]));
  console.log(getLast([]));
// console.log should read 3, since this is the last item in the array.
// I console logged a second with an empty array to show return undefined.
//confirmed in console.log reads 'undefined'..

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i = 0; i < array.length; i++) { // made a for loop that will loop thru array to check for value.
    if (0 < [array] && 0<= value) { // made a if and else to return true if value found and false if matching value not found.
      return true // return true if value found in the array during recall of the function..

    } else {
      return false
    }
  }
}
console.log('found the value',find(1,[3])); // should return true since array has value '3..'
console.log('didnt find value', find(100,[0])); // should return false
// since no value was found in the array.

// trying to nest a for loop into a function and next nest a if conditional in
//to that. Cuurent console.log reads undefined with one array with values and
//one without..

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
      return true;
    }
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
