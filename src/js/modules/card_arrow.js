const arrow = document.querySelector('.arrow-contacts');
const shcard = document.querySelector('.show-kard');
const shcontact = document.querySelector('.show-contacts');
const card = document.querySelector('.contacts-card');

export function contactswich() {
	arrow.addEventListener('click', function () {
		arrow.classList.toggle('active');
		shcard.classList.toggle('deactive');
		shcontact.classList.toggle('active');
		card.classList.toggle('deactive');
	})
}