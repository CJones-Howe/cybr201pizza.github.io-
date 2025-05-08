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
function describePizza() {
  const descriptions = {
    margherita: "Classic pizza with tomato, mozzarella, and fresh basil.",
    pepperoni: "Topped with spicy pepperoni slices and lots of cheese.",
    hawaiian: "A sweet and savory mix of ham and pineapple.",
    veggie: "Packed with fresh vegetables like peppers, mushrooms, and onions.",
    bbq: "Loaded with BBQ sauce, grilled chicken, and red onions."
  };

  const choice = document.getElementById("pizzaSelect").value;
  document.getElementById("pizzaDescription").innerText = descriptions[choice] || "";
}
