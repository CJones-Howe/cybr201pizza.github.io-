document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const pizza = document.getElementById("pizza").value;

  if (name && pizza) {
    document.getElementById("orderStatus").textContent = `Thanks, ${name}! Your ${pizza} pizza is on the way! 🍕`;
  } else {
    document.getElementById("orderStatus").textContent = "Please fill out the form completely.";
  }
});
