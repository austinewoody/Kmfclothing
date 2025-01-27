// Array to hold cart items
/*let cart = [];

// Handle "Add to Cart" button clicks
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
        const productName = event.target.getAttribute("data-product");
        const productPrice = event.target.getAttribute("data-price");

        // Add item to cart array
        const item = { name: productName, price: parseInt(productPrice, 10) };
        cart.push(item);

        // Provide feedback to the user
        alert(`${productName} has been added to your cart!`);
        console.log(cart); // For debugging purposes
    }
});*/

// Array to hold cart items
/*let cart = [];

// Handle "Add to Cart" button clicks
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
        const productName = event.target.getAttribute("data-product");
        const productPrice = event.target.getAttribute("data-price");

        // Add item to cart array
        const item = { name: productName, price: parseInt(productPrice, 10) };
	let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart or start with an empty array
        cart.push(item);
	localStorage.setItem("cart", JSON.stringify(cart)); // Save back to localStorage

        // Provide feedback to the user
        alert(`${productName} has been added to your cart!`);
        console.log(cart); // For debugging purposes
    }
});*/

// Array to hold cart items

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-product");
        const price = parseInt(button.getAttribute("data-price"));

        const productContainer = button.parentElement;
        const size = productContainer.querySelector(".size").value;
        const color = productContainer.querySelector(".color").value;
        
        
        // Correctly select the quantity input field
        const quantity = parseInt(productContainer.querySelector(".quantity").value);

        // Check for invalid or empty quantity
        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity!");
            return;
        }

        const product = { name, price, color, size, quantity };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Check if product already exists in the cart
        const existingProduct = cart.find(
            (item) => item.name === name && item.color === color && item.size == size
        );

        if (existingProduct) {
            existingProduct.quantity += quantity; // Update quantity if product exists
        } else {
            cart.push(product); // Add new product
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${quantity} ${name}(s) in ${color} of size ${size} added to the cart!`);
    });
});


