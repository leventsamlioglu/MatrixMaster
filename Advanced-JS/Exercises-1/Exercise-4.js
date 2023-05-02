let user = {
  name: "John",
  surname: "Smith",
};

console.log((user.name = "Pete")); // Change the name with 'Pete'

delete user.surname; // Delete the surname property of th user object

console.log(user);
