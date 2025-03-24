/*// Order Form Submission
document.getElementById('cakeOrderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const cakeType = document.getElementById('cakeType').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;

    // Save order to localStorage
    const order = {
        name,
        email,
        number,
        cakeType,
        quantity,
        description,
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Clear form
    document.getElementById('cakeOrderForm').reset();

    // Refresh order list
    showOrders();
});

// Show Orders
function showOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = ''; // Clear previous orders

    if (orders.length === 0) {
        orderList.innerHTML = '<p>No orders placed yet.</p>';
        return;
    }

    orders.forEach((order, index) => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Contact:</strong> ${order.number}</p>
            <p><strong>Cake Type:</strong> ${order.cakeType}</p>
            <p><strong>Quantity:</strong> ${order.quantity}</p>
            <p><strong>Description:</strong> ${order.description}</p>
            <button onclick="deleteOrder(${index})">Delete</button>
        `;
        orderList.appendChild(orderItem);
    });
}

// Delete a Single Order
function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1); // Remove the order at the specified index
    localStorage.setItem('orders', JSON.stringify(orders));
    showOrders(); // Refresh the order list
}

// Delete All Orders
function deleteAllOrders() {
    localStorage.removeItem('orders');
    showOrders(); // Refresh the order list
}

// Review Form Submission
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get review values
    const reviewName = document.getElementById('reviewName').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Save review to localStorage
    const review = {
        reviewName,
        rating,
        comment,
    };

    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Clear form
    document.getElementById('reviewForm').reset();

    // Refresh reviews list
    showReviews();
});

// Show Reviews
function showReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Clear previous reviews

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p>No reviews yet.</p>';
        return;
    }

    reviews.forEach((review) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <p><strong>Name:</strong> ${review.reviewName}</p>
            <p><strong>Rating:</strong> ${'⭐'.repeat(review.rating)}</p>
            <p><strong>Comment:</strong> ${review.comment}</p>
        `;
        reviewsList.appendChild(reviewItem);
    });
}

// Initial Load: Show Orders and Reviews
document.addEventListener('DOMContentLoaded', function () {
    showOrders();
    showReviews();
});*/