let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};

let sum = 0;

for (const key in salaries) {
  if (salaries) {
    sum += salaries[key];
  } else console.log("0");
}

console.log(sum);
