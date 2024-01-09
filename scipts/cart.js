const cartContainer = document.getElementById('cartProduct');

// Function to display cart products
function displayCartProducts() {
    const cartProduct = JSON.parse(localStorage.getItem('cart')) || []; // Default to an empty array if no cart data is found
    cartContainer.innerHTML = ''; // Clear the cart container before displaying products

    cartProduct.forEach((product) => {
        const cartCard = document.createElement('div');
        cartCard.setAttribute('class', 'cartCard');

        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', product.imgUrl);

        const h4 = document.createElement('h4');
        h4.textContent = product.productName;

        const price = document.createElement('p');
        price.textContent = "N" + product.price;

        const quantity = document.createElement('p');
        quantity.textContent = product.quantity;

        const addBtn = document.createElement('button');
        addBtn.textContent = '+';
        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.setAttribute('data-id', product.id); // Use data attribute instead of id
        deleteBtn.addEventListener('click', deleteProduct);

        const actionDiv = document.createElement('div');
        actionDiv.setAttribute('class', 'actionDiv');
        actionDiv.appendChild(addBtn);
        actionDiv.appendChild(quantity);
        actionDiv.appendChild(decreaseBtn);

        cartCard.appendChild(cartImg);
        cartCard.appendChild(h4);
        cartCard.appendChild(price);
        cartCard.appendChild(actionDiv);
        cartCard.appendChild(deleteBtn);

        cartContainer.appendChild(cartCard);
    });
}

// Function to delete cart product
function deleteProduct(event) {
    const id = parseInt(event.target.getAttribute('data-id')); // Retrieve the ID from data attribute
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Fetch cart data

    const newCart = cart.filter((item) => item.id !== id); // Filter out the product to be deleted

    localStorage.setItem('cart', JSON.stringify(newCart)); // Update local storage
    displayCartProducts(); // Re-display updated cart
}

// Initial display of cart products
displayCartProducts();
