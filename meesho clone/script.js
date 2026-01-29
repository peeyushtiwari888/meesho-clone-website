 let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1); // remove 1 item at 'index'
  displayCart();
}

function displayCart() {
  const cartItemsMini = document.getElementById("cart-items-mini");
  const cartTotalMini = document.getElementById("cart-total-mini");
  const cartCount = document.getElementById("cart-count");

  cartItemsMini.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
    `;
    cartItemsMini.appendChild(li);
    total += item.price;
  });

  cartTotalMini.innerText = `Total: ₹${total}`;
  cartCount.innerText = cart.length;
}
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  displayCart();
}
let email = document.querySelector("email")
 let password = document.querySelector("password")
 
function login(e) {
e.preventDefault();
 


 console.log(email.value)
}



  function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(() => {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) timer = 0;
    }, 1000);
  }

  window.onload = function () {
    let countdown = 7200; // 2 hours
    let display = document.querySelector('#timer');
    startTimer(countdown, display);
  };

// buttom to top
  const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



  


