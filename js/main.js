/* ========== Sticky Header: Disabled when the viewport is 450px or less. =========== */
let headers = document.querySelectorAll('header');

window.addEventListener('scroll', function () {
	headers.forEach(function (header) {
		if (window.matchMedia('(max-width: 450px)').matches) {
			// If the viewport is 450px or less, remove the 'sticky' class
			header.classList.remove('sticky');
		} else {
			// Otherwise, toggle the 'sticky' class based on scroll position
			header.classList.toggle('sticky', window.scrollY > 60);
		}
	});
});

/* ============================== Nav Bar Toggle Icon =============================== */
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			//active navbar links
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});

			// active sections for animation on scroll
		}
		// if want to use animation that repeats on scroll use this
	});

	//sticky header
	/* let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 90); */

	// Make the top element to become sticky only after a certain scroll position
	/* Add code here */

	// remove toggle icon and navbar when navbar links are clicked (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/* =================== REMOVE BOTTOM SCROLL ICON =================== */
// Make the footer-scroll icon to become visible only after a certain scroll position
/* window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');
	footerIconTop.classList.toggle('active', window.scrollY > -100);
	footerIconTop.classList.toggle('hidden', window.scrollY <= 0);
}); */

// To make the footer-scroll icon visible only after a certain scroll position and hide it once scrolling stops, you can modify the JavaScript code as follows:

window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');

	// Set the scroll position at which the icon becomes visible
	var showAfterScroll = 100; // in pixels

	// Add 'active' class when scrolled past 'showAfterScroll' position
	if (window.scrollY > showAfterScroll) {
		footerIconTop.classList.add('active');
		footerIconTop.classList.remove('hidden');
	} else {
		footerIconTop.classList.remove('active');
	}

	// Hide the icon when scrolling stops after a delay
	clearTimeout(window.footerIconTimeout);
	window.footerIconTimeout = setTimeout(function () {
		footerIconTop.classList.add('hidden');
	}, 800); // Delay in milliseconds
});

/* document
	.querySelector('.footer-iconTop a')
	.addEventListener('click', function (event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}); */

/* ======================== SERVICES MODAL ========================= */
const modalViews = document.querySelectorAll('.services_modal'),
	modalBtns = document.querySelectorAll('.services_button'),
	modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalCLick) {
	modalViews[modalCLick].classList.add('active-modal');
};

// When the user clicks on the button, open the modal
modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

// When the user clicks on .services_modal-close, close the modal
modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
	modalViews.forEach((modalView) => {
		if (event.target === modalView) {
			modalView.classList.remove('active-modal');
		}
	});
});

/* ======================== PRODUCTS MODAL ========================= */
/* // Get the modal
var productModal = document.querySelector('.products_modal');

// Get the button that opens the modal
var btn = document.querySelector('.products_button');

// Get the element that closes the modal
var span = document.querySelector('.products_modal-close');

// When the user clicks on the button, open the modal
btn.onclick = function () {
	productModal.style.display = 'flex';
	//productModal.style.display = 'block';
};

// When the user clicks on (x), close the modal
span.onclick = function () {
	productModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == productModal) {
		productModal.style.display = 'none';
	}
}; */

/* ======================== PRODUCTS MODAL ========================= */
// Get all the modals
var modals = document.querySelectorAll('.products_modal');

// Get all the buttons that open the modals
var btns = document.querySelectorAll('.products_button');

// Get all the elements that close the modals
var spans = document.querySelectorAll('.products_modal-close');

// Function to open a modal
function openModal(modal) {
	modal.style.display = 'flex';
}

// Function to close a modal
function closeModal(modal) {
	modal.style.display = 'none';
}

// Loop through all the buttons to add click event
btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		openModal(modals[index]);
	});
});

// Loop through all the close buttons to add click event
spans.forEach((span, index) => {
	span.addEventListener('click', () => {
		closeModal(modals[index]);
	});
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
	modals.forEach((modal) => {
		if (event.target == modal) {
			closeModal(modal);
		}
	});
});
