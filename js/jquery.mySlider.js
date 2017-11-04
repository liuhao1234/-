(function(){
	$.fn.mySlider = function(options){
		var settings = $.extend({
			autoplay : true,
			interval : 3000,
			speed : 700,
		},options||{})

		var count = 0;
		var shownum = 1;
		var container = this;
		var ulElement = container.find('ul');
		var liItem = ulElement.find('li');
		var liSize = liItem.length;
		var spanSize = Math.ceil(liSize/shownum);
		var endli = liSize%shownum

		var createDiv = "<div class='page_dot'></div>"
		var createSpan = "<span></span>"
		var timer = null;

		var slider = {
			init : function(){
				var containerWidth = container.width();
				var ulPercent = (liSize/shownum);
				var liPercent = (1/liSize);
				var ulWidth = (containerWidth*ulPercent).toFixed(10).substring(0,10);
				var liWidth = (ulWidth*liPercent).toFixed(10).substring(0,10);				

				ulElement.css({'width':ulWidth + 'px'});
				liItem.css({'width':liWidth + 'px'});
				//alert(spanSize)
				// for(var i=0; i<spanSize; i++){
				// 	createDiv = $(createDiv).append(createSpan);
				// }
				// createDiv.find('span').eq(0).addClass('active')
				// createDiv.insertAfter(container);
			},
			move : function(){
				var liWidth = liItem.eq(0).width();
				
				if(count < spanSize-1){
					ulElement.animate({'left':-liWidth*shownum*count},settings.speed)
				}else{
					ulElement.animate({'left':-liWidth*(liSize-shownum)},settings.speed)
					count = -1
				}
			},

			autoPlay : function(){
				var me = this;
				timer = setInterval(function(){
					count++;
					me.move();
					me.spanStyle()
				},settings.interval)
			},

			stopAuto : function(){
				clearInterval(timer);
			},

			spanCtrl : function(){
				var me = this
				container.find('.content').find('span').click(function(){
					count = $(this).index();
					me.move();
					me.spanStyle();
				})
			},

			spanStyle : function(){
				container.find('.content').find('span').removeClass('active').eq(count).addClass('active')
			}
			
		};

		slider.init();

		//slider.autoPlay();

		slider.spanCtrl();

		// container.mouseover(function(){
		// 	slider.stopAuto();
		// }).mouseout(function(){
		// 	slider.autoPlay();
		// });

		

		return this;
	}
})(jQuery)