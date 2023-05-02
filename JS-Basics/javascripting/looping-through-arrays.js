const pets = ["cat", "dog", "rat"];

for (const pet in pets) {
  pets[pet] = pets[pet] + "s";
}

console.log(pets);
