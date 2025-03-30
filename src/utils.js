document.addEventListener("DOMContentLoaded", () => {
  // section for cart and mobile nav
  const cartIcon = document.querySelector("#cart-icon");
  const cart = document.querySelector(".cart");
  const closeCart = document.querySelector("#cart-close");
  const cartOverlay = document.querySelector(".cart-overlay");

  // section for cart and merch products
  const addToCartButtons = document.querySelectorAll(".add-cart");
  const buyButton = document.querySelector(".btn-buy");
  let products = document.querySelectorAll(".main_container, .product-box");
  let cartBoxes = document.querySelectorAll(".cart-box");
  // end of section for cart and merch products

  const scrollUpButton = document.getElementById("scroll_up--button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
      scrollUpButton.style.opacity = "1";
      scrollUpButton.removeAttribute("inert");
    } else {
      scrollUpButton.style.opacity = "0";
      scrollUpButton.setAttribute("inert", "");
    }
  });

  function updateScrollBehavior() {
    const disableScroll = window.innerWidth <= 640;
    const isCartOpen = cart.classList.contains("active");

    if (disableScroll && isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Add event listener for window resize
    window.addEventListener("resize", () => {
      if (disableScroll && isCartOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  window.addEventListener("resize", updateScrollBehavior);

  // fucntions to open and close the cart
  function opensCart() {
    cart.classList.add("active");
    cartOverlay.classList.add("active");
    cartIcon.setAttribute("aria-expanded", "true");
    cart.removeAttribute("inert");
    updateScrollBehavior();
  }

  function closesCart() {
    cart.classList.remove("active");
    cartOverlay.classList.remove("active");
    cartIcon.setAttribute("aria-expanded", "false");
    cart.setAttribute("inert", "");
    updateScrollBehavior();
  }

  // end of fucntions to open and close the cart and mobile nav

  function initializeCart() {
    // cart and mobile nav open and close section
    cartIcon.addEventListener("click", () => {
      opensCart();
    });

    closeCart.addEventListener("click", () => {
      closesCart();
    });

    cartOverlay.addEventListener("click", () => {
      closesCart();
    });

    document.addEventListener("DOMContentLoaded", updateCartDisplay);

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addCartItem);
    });

    buyButton.addEventListener("click", submitOrder);

    // calls the updateAddToCartButton function when the page loads
    updateAddToCartButton();

    // checks if the input size has changde and updates the add-cart button
    document.addEventListener("change", function (event) {
      if (event.target.matches('input[name="size"]')) {
        updateAddToCartButton();
      }
    });

    // calls the updateCartDisplay function when the page loads and the updateTotallItems when the page loads
    updateCartDisplay();
    updateTotalItems();
  }

  // updates the state of the add-cart button wheter a size is selected or not
  function updateAddToCartButton() {
    products.forEach((product) => {
      // select the sizes and the add-cart buttons
      let sizeInputs = product.querySelectorAll('input[name="size"]');
      let addToCartButton = product.querySelector(".add-cart");

      if (sizeInputs.length > 0 && addToCartButton) {
        let isSizeSelected = Array.from(sizeInputs).some(
          (input) => input.checked
        );

        // if a size is selected the class disabled is removed, otherwise it is added
        if (isSizeSelected) {
          addToCartButton.classList.remove("disabled");
        } else {
          addToCartButton.classList.add("disabled");
        }
      }
    });
  }

  // adds merch to the cart
  function addCartItem() {
    // selects the main_container and the closest product-box
    let product =
      this.closest(".main_container") || this.closest(".product-box");
    if (!product) {
      return;
    }

    // selects the class product-title and gets the text content and assigns it to the title variable
    let title = product.querySelector(".product-title").innerHTML;

    // selects the class with
    let price = parseFloat(
      product.querySelector(".product-price").innerHTML.replace("$", "") || "0"
    );

    // selects the main_img--card and the img source and assign it to the imgSrc variable
    let imgSrc = product.querySelector(".merch_img--card img").src;

    // selects the size input that is checked, if it exists
    let sizeElement = product.querySelector('input[name="size"]:checked');
    let size = sizeElement ? sizeElement.nextElementSibling.innerHTML : null;

    // selects the quantity input
    let quantityElement = product.querySelector(".quantity");
    let quantity;

    // checks if the quantityElement exists it gets the value from the quantity input and coverts it to an int and assigns it to the quantity variable, otherwise it sets the quantity to 1
    if (quantityElement) {
      quantity = parseInt(quantityElement.value);
    } else {
      quantity = 1;
    }

    let newToAdd = {
      title,
      price,
      imgSrc,
      size,
      quantity,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(
      (el) => el.title == newToAdd.title && el.size == newToAdd.size
    );

    if (existingItem) {
      existingItem.quantity = Math.min(existingItem.quantity + quantity, 10);
    } else {
      cart.push(newToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
    opensCart();
  }

  function updateCartDisplay() {
    const cartContent = document.querySelector(".cart-content");
    if (!cartContent) {
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      displayMessage();
      disalbeBuyButton();
    } else {
      enableBuyButton();
      cartContent.innerHTML = "";
      cart.forEach((item) => {
        let cartBoxElement = CartBoxComponent(item);
        cartContent.innerHTML += cartBoxElement;
      });
    }

    updateTotal();
    addEvents();
    updateTotalItems();
  }

  // section for enabling and disabling the buy button
  function disalbeBuyButton() {
    buyButton.classList.add("disabled");
  }

  function enableBuyButton() {
    buyButton.classList.remove("disabled");
  }
  // end of section for enabling and disabling the buy button

  // retrieves the items in the cart from local storage
  function getTotalItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  // function to show the total number of items in the cart
  function updateTotalItems() {
    const totalItems = document.querySelector("#total-items");
    const totalItemCount = getTotalItems();
    // checks if the totalItems element exists and updates the #total-items with the total number of items in the cart and if it doesnt exists it wont be updated
    if (totalItems) {
      totalItems.textContent = totalItemCount;
      // if no items in cart
      if (totalItemCount > 0) {
        totalItems.classList.add("enabled");
      } else {
        totalItems.classList.remove("enabled");
      }
    }
  }

  function removeFromCart() {
    // retrieves the current cart from local storage and if the cart is empty it returns an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // selects the closest cart-box with the click remove from cart icon
    let cartBox = this.closest(".cart-box");
    // selects the title and size from the cart-box
    let title = cartBox.querySelector(".cart-product-title").innerHTML;
    let sizeElement = cartBox.querySelector(".cart-size");
    // selects the size elemnt and uses the split method to split the string at the colon and space, then selecs the
    // second part of the array and if the merch doesnt have a size it sets it to null
    let size = sizeElement ? sizeElement.innerHTML.split(": ")[1] : null;
    // filters the cart array to remove the item that matches the extracted title and size.
    cart = cart.filter((el) => !(el.title == title && el.size == size));
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
    updateTotal();
    updateTotalItems();
  }

  function updateTotal() {
    const totalElement = document.querySelector(".total-price");
    let total = 0;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((item) => {
      let price = item.price;
      let quantity = item.quantity;
      total += price * quantity;
    });

    // rounds the total to 2 decimal places
    total = total.toFixed(2);
    // adds the total to the total-price element with a $ sign
    totalElement.innerHTML = "$" + total;
  }

  function submitOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.removeItem("cart");

    const modal = document.getElementById("order-modal");
    const loaderContainer = document.getElementById("loader-container");
    const loader = document.getElementById("loader");

    setTimeout(() => {
      loaderContainer.style.display = "flex";
      loader.style.display = "block";
      document.body.style.overflow = "hidden";
    }, 250);

    setTimeout(() => {
      loaderContainer.style.display = "none";
      loader.style.display = "none";
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }, 2500);

      updateCartDisplay();
      updateTotal();
      updateTotalItems();
      closesCart();
  }

  // Close the modal when the user clicks on the x
  const closeModal = document.getElementById("close-modal");
  closeModal.onclick = function () {
    const modal = document.getElementById("order-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  const closeModalBtn = document.getElementById("order_close--btn");
  closeModalBtn.onclick = function () {
    const modal = document.getElementById("order-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function (event) {
    const modal = document.getElementById("order-modal");
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  function displayMessage() {
    const cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = `
        <div class="empty-cart-message">
            <p>Your cart is empty</p>
        </div>
  `;
  }

  function CartBoxComponent(item) {
    return `
         <div class="cart-box">
             <img src="${item.imgSrc}" alt="" class="cart-img">
             <div class="detail-box">
                 <div class="cart-product-info">
                     <div class="cart-product-title">${item.title}</div>
                     <div class="cart-price">$${item.price.toFixed(2)}</div>
                 </div>
                 ${item.size
        ? `<div class="cart-size">Size: ${item.size}</div>`
        : ""
      }
                 <div class="cart-quantity" data-quantity="${item.quantity
      }">Quantity: ${item.quantity}</div>
             </div>
             <i class="fa-regular fa-trash-can cart-remove"></i>
         </div>`;
  }

  function addEvents() {
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    cartRemove_btns.forEach((btn) => {
      btn.addEventListener("click", removeFromCart);
    });
  }

  initializeCart();
  // updateNavbar(media);
});
