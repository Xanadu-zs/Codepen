// 编写脚本，在点击按钮时切换样式类

$(document).ready(function() {
	$('.toggle').click(function() {
		$('.inner').toggleClass('active');
	});
});