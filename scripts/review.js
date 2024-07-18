function updateReviewCounter() {
    // Get the current counter value from localStorage
    let currentCount = parseInt(localStorage.getItem('reviewCounter')) || 0;

    // Update the counter display on the page
    document.getElementById('reviewCounter').textContent = currentCount;
}

// Call the function to update the counter when the page loads
updateReviewCounter();