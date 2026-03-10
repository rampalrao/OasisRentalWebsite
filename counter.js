// Page Visit Counter using localStorage
function initializeVisitCounter() {
    // Get current visit count from localStorage
    let visitCount = localStorage.getItem('websiteVisits');

    // If no count exists, initialize to 0
    if (visitCount === null) {
        visitCount = 0;
    } else {
        // Convert to number and increment
        visitCount = parseInt(visitCount) + 1;
    }

    // Save updated count to localStorage
    localStorage.setItem('websiteVisits', visitCount);

    // Update the display
    const counterElement = document.getElementById('visit-counter');
    if (counterElement) {
        counterElement.innerHTML = `Visitors: <strong>${visitCount}</strong>`;
    }

    // Optional: Log to console
    console.log(`Total visits: ${visitCount}`);
}

// Initialize counter when page loads
document.addEventListener('DOMContentLoaded', initializeVisitCounter);

// Alternative: Run immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVisitCounter);
} else {
    initializeVisitCounter();
}

