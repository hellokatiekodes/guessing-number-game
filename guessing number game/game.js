//create secret number// 
var secretNumber = 10

//ask user for guess, i.e. the variable// 
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess); 

//check guess is right i.e. we are writing a conditional//
//understanding the logic - == and === ??// 
if(guess === secretNumber) { 
    alert("JUST RIGHT"); 
}
//otherwise, incorrect
//else {
    // alert("WRONG D:"); } //

//otherwise, check if higher 
else if(guess > secretNumber){
    alert("Too high! try again :)");
}
//otherwise check if lower

else {
    alert("Too low, guess again :)"); 
}
//if the first two doesn't work, then the low can be 'else' // 

//one small improvement? This code is duplicated //
//We can get it out of the way at the top. //
//Guess is now a number, rather than a string //
//Now we work on a version where we don't need to refresh the page. //
//these will be called LOOPS// 

