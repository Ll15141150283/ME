 //初始化Swiper组件
	  var mySwiper = new Swiper('.swiper-container',{
	    loop: true,
		autoplay: 2000,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    	scrollbar: '.swiper-scrollbar',
    	
    	paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
	  });