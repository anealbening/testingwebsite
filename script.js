// Add an event listener to the navigation menu
document.querySelector('nav ul').addEventListener('click', function(event) {
	if (event.target.tagName === 'A') {
		event.preventDefault();
	}
});
