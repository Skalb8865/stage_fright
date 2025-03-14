const jsonFile = "/data/merch.json";
const merch = document.querySelector(".shop-content");

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const { link, name, price, image, sort_attribute, hoverimage, id } = product;
      merch.innerHTML += `
      <div class="merch-box merch_sort show ${sort_attribute}">
          <a href="${link}" aria-label="${name}"><img
          src="${image}" alt="${name}" id="${id}" class="product-img" onmouseover="document.getElementById('${id}').src='${hoverimage}'" onmouseleave="document.getElementById('${id}').src='${image}'"></a>
          <div class="info-section">
            <h2 class="product-title">${name}</h2>
            <span class="product-price">${price}</span>
          </div>
		  </div>
        `;
    });
  });
