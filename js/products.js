const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "image/laptop.jpg"
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "image/mobile.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "image/headphones.jpg"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
    container.innerHTML += `
        <div class="card">
            <img src="${product.image}" width="200">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
    `;
});
