const accordeon = document.querySelector('.feature-list');

const accordeonButtons = accordeon.querySelectorAll('.feature__link');

accordeonButtons.forEach((accordeonButton) => {
	accordeonButton.addEventListener('click', () => {
		accordeonButtons.forEach((btn) => {
			btn.classList.remove('feature__link_active');
			btn.nextElementSibling.classList.add('hidden');
		});
		accordeonButton.classList.toggle('feature__link_active');
		accordeonButton.nextElementSibling.classList.toggle('hidden');
	});
});
