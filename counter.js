// Page Visit Counter using localStorage
function initializeVisitCounter() {
    // Get current visit count from localStorage
    let visitCount = localStorage.getItem('websiteVisits');

    // If no count exists, initialize to 1 (first visit)
    if (visitCount === null) {
        visitCount = 1;
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
        console.log(`Visit counter updated: ${visitCount}`);
    } else {
        console.error('Visit counter element not found!');
    }

    // Optional: Log to console
    console.log(`Total visits: ${visitCount}`);
}

// Initialize counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing counter...');
    initializeVisitCounter();
});

// Alternative: Run immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM ready, initializing counter...');
        initializeVisitCounter();
    });
} else {
    console.log('DOM already ready, initializing counter...');
    initializeVisitCounter();
}

// Add error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.message);
});

// Test function to reset counter (for debugging)
function resetVisitCounter() {
    localStorage.removeItem('websiteVisits');
    console.log('Visit counter reset');
    initializeVisitCounter();
}

// Make reset function available globally for testing
window.resetVisitCounter = resetVisitCounter;
