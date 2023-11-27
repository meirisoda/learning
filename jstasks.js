/* let admin = "";
let name = "John";

admin = name;

alert(admin)
*/

let admin, name; // declare two variables at once

name = "John";
admin = name;
console.log( admin );

// --------------------------------------------------------------------------------------------------------------------- //

/* 
Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.
*/

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// --------------------------------------------------------------------------------------------------------------------- //

// rewrite the if statement using the conditional operator ?//

let result = (a + b < 4) ? 'Below' : 'Over';

// --------------------------------------------------------------------------------------------------------------------- //

// rewrite the if statement using the conditional operator ?//

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' : 
        (login == 'Director') ? 'Greetings' : 
        (login == '') ? 'No login' :
        '';

// --------------------------------------------------------------------------------------------------------------------- //

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

if (!(age >= 14 && age <= 90)) //the not excludes everything that is written in the parentheses after it
if (age < 14 || age > 90) // just changing the parameters. 

// --------------------------------------------------------------------------------------------------------------------- //

// which of these is going to execute?


// Runs.
// The result of -1 || 0 = -1, truthy -- because it's not 0 (ie. falsy) 
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy -- evaluates the false one 
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

// so in summary, the || will evaluate anything that is not falsy
// && will evaluate the falsy

// --------------------------------------------------------------------------------------------------------------------- //

/* 
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled”

The schema:

Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
*/

let user = prompt("Who's there?", )// missed semicolon and ''

if (user = "Admin") ? prompt("Enter password", ) : use // ===
  (user = "Other") ? alert("I don't know you") :
  (user = "Cancel") ? alert("Canceled"); 

  // solution

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

// re do

let userName = prompt("Who's there?", ''); 

if (userName === 'Admin') {
  
  let pass = prompt("Password?", '');

  if (pass === 'TheMaster') {
    alert("Welcome!");
  }  else if (pass === '', pass === null) {
      alert("Canceled");
  }  else {
      alert("Wrong password")
    }

} else if (userName === '', userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you"); 
} 
 