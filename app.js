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

let cart = {};

// Décrémenter la valeur de l'input
document.querySelector("#minus").addEventListener("click", function () {
  let quantityInput = document.getElementById(`inpuquantity`);
  let quantity = parseInt(quantityInput.value);
  //Décrémenter la valeur de l'input pour diminuer le quantity des produits
  quantity--;
  quantityInput.value = quantity;

});

// Incrémenter la valeur de l'input
document.querySelector("#plus").addEventListener("click", function () {
  let quantityInput = document.getElementById(`inpuquantity`);
  let quantity = parseInt(quantityInput.value);
  //Incrémenter la valeur de l'input pour ajouter le quantity des produits
  quantity++;
  quantityInput.value = quantity;
 
});


// L'ajout au panier
document.querySelector("#addtocart").addEventListener("click", function () {
  let popup = document.querySelector("#staticBackdrop");
  if (quantity==="") {
    popup.style.display = "block";
  } else {
  alert("here")
  }
});
