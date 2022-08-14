
	const swiper = new Swiper('.swiper',{
		grabCursor: true,
		slidesPerView: 'auto',
		spaceBetween: 31,
		centeredSlides: true,
		initialSlide: 1,
		simulateTouch: false,
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

	
