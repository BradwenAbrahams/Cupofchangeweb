function addToCart() {
  alert("Added to cart! ☕");
}

function greetUser() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greeting");

  let message = "";
  let className = "";

  if (hour < 12) {
    message = "Good morning! How about a warm latte to start your day?";
    className = "morning";
  } else if (hour < 18) {
    message = "Good afternoon! The perfect time for a bold espresso shot.";
    className = "afternoon";
  } else {
    message = "Good evening! Unwind with a smooth mocha.";
    className = "evening";
  }

  greetingElement.innerText = message;
  greetingElement.className = "greeting " + className;
}

window.onload = greetUser;

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
