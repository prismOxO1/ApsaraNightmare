document.getElementById('scrollToBottom').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Scroll to the bottom of the page
    document.getElementById('bottomOfPage').scrollIntoView({ behavior: 'smooth' });
});
