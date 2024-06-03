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

document.querySelector("#minus").addEventListener("click", function () {});

let cart = {};

// Décrémenter la valeur de l'input
document.querySelector("#minus").addEventListener("click", function () {
  let produit = "produit1";
  let price = 125.0; //Le prix
  let quantityInput = document.getElementById(`inpuquantity`);
  let quantity = parseInt(quantityInput.value);
  //Décrémenter la valeur de l'input pour diminuer le quantity des produits
  quantity--;
  quantityInput.value = quantity;
  // if (cart[produit]) {
  //   cart[produit].quantity = quantity;
  //   if (cart[produit].quantity <= 0) {
  //     delete cart[produit];
  //   }
  // }
});

// Incrémenter la valeur de l'input
document.querySelector("#plus").addEventListener("click", function () {
  let produit = "produit1";
  let price = 125.0; //Le prix
  let quantityInput = document.getElementById(`inpuquantity`);
  let quantity = parseInt(quantityInput.value);
  //Incrémenter la valeur de l'input pour ajouter le quantity des produits
  quantity++;
  quantityInput.value = quantity;
  // if (cart[produit]) {
  //   cart[produit].quantity = quantity;
  // } else {
  //   cart[produit] = { quantity: quantity, price: price };
  // }
});


// L'ajout au panier
document.querySelector("#addtocart").addEventListener("click", function () {

});
