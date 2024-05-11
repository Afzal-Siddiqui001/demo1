document.getElementById("add-to-cart-btn").addEventListener("click", function() {
    addToCart();
  });
  
  function addToCart() {
    var productName = document.querySelector(".product h2").textContent;
    var cart = document.getElementById("cart-items");
    var listItem = document.createElement("li");
    listItem.className = "cart-item";
    listItem.textContent = productName;
    cart.appendChild(listItem);
  }
  