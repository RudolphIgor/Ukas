const menuLinks = document.querySelectorAll('.menu__link[data-goto]');


export function slScroll() {
	console.log(menuLinks);
	if (menuLinks.length > 0) {
		menuLinks.forEach(element => {
			element.addEventListener('click', onMenuLinkClick)
		});
	}
}

function onMenuLinkClick(e) {
	const menuLink = e.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;

		window.scroll({
			top:gotoBlockValue,
			behavior: "smooth"
		})
		e.preventDefault();
	}
}