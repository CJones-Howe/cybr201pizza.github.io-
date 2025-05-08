function showFact() {
  const facts = [
    "The first pizzeria opened in Naples, Italy in 1738.",
    "Pepperoni is the most popular pizza topping in the U.S.",
    "The world's largest pizza was over 13,000 square feet.",
    "October is National Pizza Month in the U.S.",
    "Pizza was brought to the U.S. by Italian immigrants in the late 19th century."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[randomIndex];
}
