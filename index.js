// Cache elements using selectElementById and querySelector
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav a'); 
    const searchInputs = document.querySelectorAll('input[type="search"]');

    console.log(navLinks); 
    const headerTitle = header.querySelector('h1');
    if (navLinks.length > 0) {
        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                headerTitle.textContent = `You clicked on ${link.textContent}`;
            });
        });

        // Create a new element using createElement
        const newNavLink = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.textContent = 'New Destination';
        newNavLink.appendChild(newLink);
        navLinks[0].parentNode.appendChild(newNavLink); 

        // Use DocumentFragment to create templated content
        const fragment = document.createDocumentFragment();
        const templateLink = document.createElement('li');
        const templateAnchor = document.createElement('a');
        templateAnchor.textContent = 'Template Link';
        templateAnchor.href = '#';
        templateLink.appendChild(templateAnchor);
        fragment.appendChild(templateLink);
        navLinks[0].parentNode.appendChild(fragment); 
    } else {
        console.error('No navigation links found.');
    }

    // Modify style and CSS classes in response to user interaction
    header.addEventListener('mouseover', () => {
        header.classList.add('hover');
    });
    header.addEventListener('mouseout', () => {
        header.classList.remove('hover');
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
        });
    } else {
        console.error('Form not found');
    }

    
    console.log(window.location.href);

    
    searchInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            console.log(`Searching for: ${searchTerm}`);
        });
    });

    // Email validation
    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput) {
        emailInput.addEventListener('input', (e) => {
            const emailValue = e.target.value;
            console.log(emailValue.includes('@') ? 'Valid email' : 'Invalid email');
        });
    }

    // Password validation
    const passwordInput = document.querySelector('input[name="password"]');
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            const passwordValue = e.target.value;
            console.log(passwordValue.length >= 8 ? 'Strong password' : 'Weak password');
        });
    }
});