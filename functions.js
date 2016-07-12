/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */

var a = 4;
 var b = 6;
 var c = 2;
 console.log("global numbers:",a,b,c);

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */

function add(number1,number2) {
	var result;
	result = number1+number2
	return result;
}
var sum = add(a,b);
console.log("sum", sum);

/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */


function substract(number1,number2) {
	return number1 - number2;
}
var difference = substract(a,b);
console.log('difference', difference);

/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */


function multiply(number1,number2) {
	return number1 * number2;
}
var product = multiply(a,b);
console.log('product', product);


/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */

function checkDifference(number1) {
	var result;
	result = "My football team lost " + difference + " times this week";
	return result;
}
var X = checkDifference(difference);
console.log('checkDifference',X);

/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */

function chkSum(number1) {
	return "I CAN ADDZ " + sum + " NUMBERS";
}
var X = chkSum(sum);
console.log('checkSum',X);

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */

function checkProduct(number1,number2) {
	return number1 * number2;
}
console.log('checkProduct',checkProduct(product,difference));

/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */
function addThenSubtract(number1,number2,number3) {
	var xadd = add(number1,number2);
	console.log(xadd);
	return substract(xadd,number3);
}
var addall = addThenSubtract(a,b,c);
console.log("add Then subtract", addall);

/**
* a kovetkezo verzio is helyes, azaz lehet functionoket egymasba hivni!
*/

function addTSub2(number1,number2,number3) {
	var result;
	result = substract(add(number1,number2),number3);
	return result;
}
var addall2 = addTSub2(a,b,c);
console.log("short code", addall2);
	
/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */

function addThenMultiply(number1,number2,number3) {
	return multiply(add(number1,number2),number3);
}
var howMany = addThenMultiply(a,b,c);
console.log("add Then multiply", howMany)

/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */

function createFullName(firstName,lastName) {
	return firstName + " " + lastName; 
}
var myFullName = createFullName("Marta","Katona");
console.log('My full name is',myFullName)

/**
* ez a helyesebb forma a function ra
*/

function createFullName2(firstName,lastName) {
	var result = "";
	result = firstName + " " + lastName;
	return result; 
}
var myFullName2 = createFullName("Marta","Katona");
console.log('My full name 2 is',myFullName2 + "!")


/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */
function verifyDrinkingAge(age) {
	var result;
	result = age >= 21;
	return result;
}
var canDrinkBeer = verifyDrinkingAge(25);
console.log("Can age 25 drinking?", canDrinkBeer);

/**
 *  #12
 *  Function - throwParty
 *

 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */

function throwParty(selector) {
	var result = "";
	if ( selector = false) {
		result = "The Party will have tons of Cake";
	}else{
		result = "This Party will have an open bar";
	}
	return result;
}
var partyMessage = throwParty(canDrinkBeer);
console.log("For age 25: ", partyMessage);

/**
* helyesebb a feltetel igy
*   function throwParty(barStatus) {
*    if (barStatus) {  akarmi van leirva csak magaban a boolean erteke mindig true!!
*	     console.log("uzenet");
*     else
*         console.log("uzenet");
*  }
*  throwParty(true);  azaz nem kell a console log, a functiont meghivhatom kozvetlenul a parameterrel 
*                     kozvetlenul!! 
/**
* ez volt az eredeti amit en irtam, helyes eredmenyt ad de kevesbe koveti a syntaxot 
*
* function throwParty(selector) {
* 	if ( selector === false ){
*		return "The Party will have tons of Cake";
*	}else{
*		return "This Party will have an open bar";
*	}
*  }
*  console.log("For age 20: ", throwParty(canDrinkBeer));
*/


/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */

function eatFood(firstName,lastName,food){
	var result;
	result = createFullName(firstName,lastName) + " loves to eat " + food;
	return result;
}
console.log(eatFood("Marta","katona","raspberries"));


/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

function repeater(drinkingStatus){
	var i;
	for (i=0; i < howMany; i++){
		if (drinkingStatus === false){
			console.log("Bacon Pancakes, makin' Bacon Pancakes...");	
		}else{
			console.log("Let it go.... LET IT GOOOOOOoOoOoOo...");
		}
	}
}
repeater(canDrinkBeer);

/**
* a kovetkezo a tanar fele
*/

function whatISayAtParty(drinkingStatus,howMany2){
	for (var i=0; i <= howMany2; i++) {
		if (drinkingStatus >= 21) {
			console.log('chug');
		} else {
			console.log('oh no');
		}

	}
	
}

whatISayAtParty(canDrinkBeer,5);


var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers.length; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  console.log(currentLotteryNumber);
}


