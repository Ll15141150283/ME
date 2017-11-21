$(document).ready(function(e) {        
			
				//滚动监听
				$(window).scroll(function(event) {
					if($(window).scrollTop()>$('#banner').outerHeight(true)){

						$('#navbar-example').addClass('navbar-fixed-top');
						$('.zhanwei').css('display','block');
					}else{

						$('#navbar-example').removeClass('navbar-fixed-top');
						$('.zhanwei').css('display','none');
					}


					var gdtTop = $(window).scrollTop();
					var homeH=$('#home').offset().top;
					var aboutH=$('#aboutme').offset().top;
					var skillsH=$('#skills').offset().top;

					var expriH=$('#exprience').offset().top;

					var contactH=$('#contact').offset().top;

					// if(gdtTop>0&&gdtTop<homeH-62){
					// 	$('#myCollapse li').eq(0).addClass('active');
					// }else{
					// 	$('#myCollapse li').eq(0).removeClass('active');
					// }
					if(gdtTop>aboutH-62&&gdtTop<skillsH-62){
						$('#myCollapse li').eq(0).removeClass('active');
						$('#myCollapse li').eq(1).addClass('active');
					}else{
						$('#myCollapse li').eq(1).removeClass('active');
					}
					if(gdtTop>skillsH-62&&gdtTop<expriH-62){
						$('#myCollapse li').eq(2).addClass('active');
					}else{
						$('#myCollapse li').eq(2).removeClass('active');
					}
					if(gdtTop>expriH-62&&gdtTop<contactH-62){
						$('#myCollapse li').eq(3).addClass('active');
					}else{
						$('#myCollapse li').eq(3).removeClass('active');
					}
					if(gdtTop>contactH-62){
						$('#myCollapse li').eq(4).addClass('active');
					}else{
						$('#myCollapse li').eq(4).removeClass('active');
					}
				});
				

				// 导航条点击高亮
				$('#myCollapse li a').click(function(){
					$(this).parent().addClass('active');
					var partH = $(this.hash).offset().top;
					$('html,body').animate({scrollTop:partH -60},1000);

						return false;

				})
			});	