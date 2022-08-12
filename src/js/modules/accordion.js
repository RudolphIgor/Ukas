export function swipe () {
	document.querySelectorAll('.accordion__item').forEach(element => {
		
		element.addEventListener('click', () => {
			if(!element.classList.contains('no-toch')){
				if (element.classList.contains('active')){
					element.classList.remove('active');
					element.style.maxHeight = '71px';
				} else {
					document.querySelectorAll('.accordion__item').forEach(el => {
						el.classList.remove('active');
						el.style.maxHeight = '71px';
					})
					element.classList.add('active');
					element.style.maxHeight = element.scrollHeight + 'px';
				}
			}
			console.log(element.style.maxHeight);
		});

	});
}
