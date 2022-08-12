export function swipe () {
	document.querySelectorAll('.accordion__item').forEach(element => {
		
		element.addEventListener('click', () => {
			// element.classList.add('active');
			document.querySelectorAll('.accordion__item').forEach(element => {
				element.style.maxHeight = '71px';
			})
			element.style.maxHeight = element.scrollHeight + 'px';
			




			console.log(element.style.maxHeight);
		});
	});
}
