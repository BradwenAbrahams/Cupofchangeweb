function addToCart(productName) {
    alert(productName + " has been added to your cart!");
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

window.addEventListener("scroll", function() {
  const nav = document.querySelector("table");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#2c1d1d"; //
  } else {
    nav.style.backgroundColor = "#3b2f2f"; // original
  }
});

const links = document.querySelectorAll("table a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.fontWeight = "bold";
    link.style.color = "#2e7d32";  // green highlight
    link.style.textDecoration = "underline";
  }
});

window.onload = () => {
  document.body.classList.add("loaded");
};

