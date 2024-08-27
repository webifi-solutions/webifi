/* const html = document.getElementById('htmlPage');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		html.setAttribute('data-bs-theme', 'dark');
	} else {
		html.setAttribute('data-bs-theme', 'light');
	}
}); */

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('checkbox');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-moon';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'light' : 'dark';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('change', () => {
	if (checkbox.checked) {
		document.body.classList.toggle(darkTheme);
	} else {
		document.body.classList.toggle(darkTheme);
	}

	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
