
	const swiper = new Swiper('.swiper',{
		simulateTouch: true,
		grabCursor: true,
		slidesPerView: 'auto',
		spaceBetween: 31,
		centeredSlides: true,
		initialSlide: 1,
		freeMode: {
			enabled: true,
		},
		
		breakpoints: {
		
			319: {
				scrollbar: {
					el: '.swiper-scrollbar',
					dragSize: '140px',
					draggable: true,
					enabled: true,
				},
			},
			992: {
				scrollbar: {

					enabled: false,
				},
			},
		}
	});

	
