$(".button").each(function () {
  // the containers for all your galleries
  $(this).magnificPopup({
    delegate: "a", // the selector for gallery item
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(".test-popup-link").magnificPopup({
  type: "image",
  // other options
});

let cart = {};
let quantityInput = document.getElementById(`inpuquantity`);
let product = "product1";
let val = document.querySelector("li #valhaut");

let cartvide = document.getElementById("vide");
let cartechargé = document.getElementById("ppCart");

// Décrémenter la valeur de l'input
document.querySelector("#minus").addEventListener("click", function () {
  let quantity = parseInt(quantityInput.value);
  //Décrémenter la valeur de l'input pour diminuer le quantity des produits
  if (quantity > 0) {
    quantity--;
    quantityInput.value = quantity;
  }
});

// Incrémenter la valeur de l'input
document.querySelector("#plus").addEventListener("click", function () {
  let quantity = parseInt(quantityInput.value);
  //Incrémenter la valeur de l'input pour ajouter le quantity des produits
  if (!isNaN(quantity)) {
    quantity++;
    quantityInput.value = quantity;
  }
});

// L'ajout au panier
document.querySelector("#addtocart").addEventListener("click", function () {
  val.innerText = quantityInput.value;
});

// cart

document
  .querySelector("#cart")
  .addEventListener("click", function updateCart() {
    const valeurrecup = parseInt(val.innerText);
    if (!isNaN(valeurrecup) && valeurrecup > 0) {
      cart[product] = { quantity: valeurrecup, price: 125.0 };
      cartvide.classList.remove("active");
      cartechargé.classList.add("active");
    } else if (isNaN(valeurrecup)) {
      cart[product] = 0;
      cartvide.classList.add("active");
      cartechargé.classList.remove("active");
    }
    // else {
    //   cart[product] = undefined;
    //   cartvide.classList.add("active");
    //   cartechargé.classList.remove("active");
    // }
    const cartItems = document.getElementById("quantity");
    cartItems.innerHTML = "";
    let totalPrice = 0;

    for (let product in cart) {
      if (cart[product]) {
        const productTotalPrice = cart[product].quantity * cart[product].price;
        cartItems.textContent = `$${cart[product].price}  x ${cart[product].quantity}  `;
        totalPrice += productTotalPrice;
      }
    }

    document.getElementById("amount").textContent = `$ ${totalPrice}`;
  });
