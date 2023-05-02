// Check age with arrow function and without using if..else

let checkAge = (age) => {
  age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
};

checkAge(20);

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
