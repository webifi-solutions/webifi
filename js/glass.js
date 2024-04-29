// Initialize the tilt effect on my card element:
document.addEventListener('DOMContentLoaded', function () {
	VanillaTilt.init(document.querySelector('.portfolio_card'), {
		max: 25,
		speed: 400,
		glare: true,
		'max-glare': 0.3,
	});
});
