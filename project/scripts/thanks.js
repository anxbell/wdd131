// Function to update the review counter display
function updateReviewCounter() {

    let currentCount = parseInt(localStorage.getItem('reviewCounter')) || 0;

    document.getElementById('reviewCounter').textContent = currentCount;
}

function incrementReviewCounter() {

    let currentCount = parseInt(localStorage.getItem('reviewCounter')) || 0;

    currentCount++;
    localStorage.setItem('reviewCounter', currentCount);

    document.getElementById('reviewCounter').textContent = currentCount;
}


window.addEventListener('load', () => {
    incrementReviewCounter();
    updateReviewCounter();
});