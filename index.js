// Cache elements using selectElementById and querySelector
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav a');
const searchInput = document.querySelector('input[type="search"]');

// Use parent-child-sibling relationship to navigate elements
const firstNavLink = navLinks[0];
const lastNavLink = navLinks[navLinks.length - 1];
const headerTitle = header.firstChild;

// Iterate over elements to accomplish a task
navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		// Modify HTML content in response to user interaction
		headerTitle.textContent = `You clicked on ${link.textContent}`;
	});
});

// Create a new element using createElement
const newNavLink = document.createElement('li');
const newLink = document.createElement('a');
newLink.textContent = 'New Destination';
newNavLink.appendChild(newLink);

// Add new elements to the DOM using appendChild and prepend
navLinks[0].parentNode.appendChild(newNavLink);

// Use DocumentFragment to create templated content
const fragment = document.createDocumentFragment();
const template = '<li><a href="#">Template Link</a></li>';
fragment.innerHTML = template;
navLinks[0].parentNode.appendChild(fragment);

// Modify style and CSS classes in response to user interaction
header.addEventListener('mouseover', () => {
	header.classList.add('hover');
});
header.addEventListener('mouseout', () => {
	header.classList.remove('hover');
});

// Modify attributes in response to user interaction
searchInput.addEventListener('input', (e) => {
	const searchTerm = e.target.value;
	// Do something with the search term
});

// Register event listeners and create event handler functions
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// Do something with the form data
});

// Use Browser Object Model (BOM) properties and methods
const currentUrl = window.location.href;
console.log(currentUrl);

// Include form and input with HTML attribute validation
const emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('input', (e) => {
	const emailValue = e.target.value;
	if (emailValue.includes('@')) {
		console.log('Valid email');
	} else {
		console.log('Invalid email');
	}
});

// Include form and input with DOM event-based validation
const passwordInput = document.querySelector('input[type="password"]');
passwordInput.addEventListener('input', (e) => {
	const passwordValue = e.target.value;
	if (passwordValue.length >= 8) {
		console.log('Strong password');
	} else {
		console.log('Weak password');
	}
});