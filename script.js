function showFact() {
  document.getElementById("fact").textContent = "The first pizza delivery was in 1889 to the Queen of Italy!";
}

document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email.includes("@")) {
    document.getElementById("formMessage").textContent = "Thanks! We'll send more pizza facts soon.";
  } else {
    document.getElementById("formMessage").textContent = "Please enter a valid email.";
  }
});
