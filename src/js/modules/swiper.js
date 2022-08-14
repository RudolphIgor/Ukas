
	const swiper = new Swiper('.swiper',{
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
				simulateTouch: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					dragSize: '140px',
					draggable: true,
					enabled: true,
				},
			},
			992: {
				simulateTouch: false,
				scrollbar: {
					enabled: false,
				},
			},
		}
	});

	
