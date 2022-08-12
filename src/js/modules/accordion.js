export function swipe () {
	document.querySelectorAll('.accordion__item').forEach(element => {
		element.addEventListener('click', () => {
			element.classList.toggle('active');
			const parent = element.childNodes;
			console.log(parent);
		});
	});
}
