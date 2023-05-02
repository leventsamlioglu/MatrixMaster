// Object destructring

let user = {
  name: "John",
  years: 30,
};

const { name, years, isAdmin = false } = user;
console.log(name);
console.log(years);
console.log(isAdmin);
