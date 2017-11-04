$(function(){
	//右侧日期选择的展开收起效果
	var dateShow = function(){

		$('.brief_introduce .main .right h3').click(function(){
			$(this).toggleClass('active');
			$(this).next().slideToggle()
		})

	}();

	//人力资源页面招聘类别切换效果

	var applicationChange = function(){

		$('.human_resources .main ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
		})

	}();

	//集团资讯新闻列表选中状态切换
	var newsChange = function(){

		$('.news_info .news_list ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
		})

	}()

	//专题杂志列表选中状态切换
	var magazineChange = function(){

		$('.magazine_list .main ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
		})

	}()

	//导航子导航显示隐藏
	var subNavShow = function(){
		var timer;
		$('.nav a').not(':first').mouseenter(function(){
			var index = $(this).index()-1;
			clearTimeout(timer);
			$(".sub_nav").fadeOut();
			$(".sub_nav").eq(index).fadeIn();
		}).mouseleave(function(){
			timer = setTimeout(function(){

				$(".sub_nav").fadeOut();

			},500)
		})

		$(".sub_nav").mouseenter(function(){
			clearTimeout(timer);
			$(this).fadeIn();
		}).mouseleave(function(){
			$(this).fadeOut();
		})

	}()

})