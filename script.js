document.addEventListener("DOMContentLoaded", function () {
    // Handle order form submission
    document.getElementById("cakeOrderForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let cakeType = document.getElementById("cakeType").value;
        let quantity = document.getElementById("quantity").value;
        let description = document.getElementById("description").value;

        // Create an order object
        let order = {
            name: name,
            email: email,
            number: number,
            cakeType: cakeType,
            quantity: quantity,
            description: description,
            date: new Date().toLocaleString()
        };

        // Store order in localStorage
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";

        // Refresh orders list
        showOrders();

        // Clear form fields
        document.getElementById("cakeOrderForm").reset();
    });

    // Function to display orders
    function showOrders() {
        let orderList = document.getElementById("orderList");
        orderList.innerHTML = ""; // Clear existing orders

        let orders = JSON.parse(localStorage.getItem("orders")) || [];

        if (orders.length === 0) {
            orderList.innerHTML = "<p>No orders placed yet.</p>";
            return;
        }

        orders.forEach((order, index) => {
            let orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <p><strong>Customer:</strong> ${order.name}</p>
                <p><strong>Contact:</strong> ${order.number}</p>
                <p><strong>Email:</strong> ${order.email}</p>
                <p><strong>Cake Type:</strong> ${order.cakeType}</p>
                <p><strong>Quantity:</strong> ${order.quantity}</p>
                <p><strong>Description:</strong> ${order.description}</p>
                <p><strong>Order Date:</strong> ${order.date}</p>
                <button onclick="deleteOrder(${index})">Delete</button>
                <hr>
            `;
            orderList.appendChild(orderItem);
        });
    }

    // Function to delete a specific order
    window.deleteOrder = function (index) {
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.splice(index, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        showOrders();
    };

    // Function to delete all orders
    window.deleteAllOrders = function () {
        localStorage.removeItem("orders");
        showOrders();
    };

    // Show orders on page load
    showOrders();
});


/**review part*/

document.addEventListener("DOMContentLoaded", function () {
    // Handle review form submission
    document.getElementById("reviewForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        let reviewName = document.getElementById("reviewName").value;
        let rating = document.getElementById("rating").value;
        let comment = document.getElementById("comment").value;

        // Create review object
        let review = {
            name: reviewName,
            rating: rating,
            comment: comment,
            date: new Date().toLocaleString()
        };

        // Store reviews in localStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Refresh reviews list
        showReviews();

        // Clear form fields
        document.getElementById("reviewForm").reset();
    });

    // Function to display reviews
    function showReviews() {
        let reviewsList = document.getElementById("reviewsList");
        reviewsList.innerHTML = ""; // Clear existing reviews

        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        if (reviews.length === 0) {
            reviewsList.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
            return;
        }

        reviews.forEach((review, index) => {
            let reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");
            reviewItem.innerHTML = `
                <p><strong>${review.name}</strong> (${review.date})</p>
                <p><strong>Rating:</strong> ${"⭐".repeat(review.rating)}</p>
                <p>${review.comment}</p>
                <button onclick="deleteReview(${index})">Delete</button>
                <hr>
            `;
            reviewsList.appendChild(reviewItem);
        });
    }

    // Function to delete a specific review
    window.deleteReview = function (index) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.splice(index, 1);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        showReviews();
    };

    // Function to delete all reviews
    window.deleteAllReviews = function () {
        localStorage.removeItem("reviews");
        showReviews();
    };

    // Show reviews on page load
    showReviews();
});


/*gallary*/
